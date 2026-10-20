// Renders heavy images in public/images to compressed WebP files in public/images/optimized.
// Most large .svg files here are Figma exports wrapping embedded PNGs, so they are many MB
// and slow to download; a WebP rendered at display size is a fraction of that.
//
// Usage: npm run optimize-images            (skips files that are already up to date)
//        npm run optimize-images -- --force (re-renders everything)

import { readdir, stat, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = path.resolve("public/images");
const OUTPUT_DIR = path.join(SOURCE_DIR, "optimized");
const MAX_WIDTH = 2000;
/** Smaller files are real vectors or already light enough to serve as-is. */
const MIN_BYTES = 150 * 1024;
const force = process.argv.includes("--force");

async function isUpToDate(source, output) {
  try {
    return (await stat(output)).mtimeMs >= (await stat(source)).mtimeMs;
  } catch {
    return false;
  }
}

const OPTIONS = { limitInputPixels: false, unlimited: true };

async function render(source, output) {
  const ext = path.extname(source).toLowerCase();

  if (ext === ".gif") {
    await sharp(source, { ...OPTIONS, animated: true })
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(output);
    return;
  }

  let density;
  if (ext === ".svg") {
    // Rasterise with headroom above MAX_WIDTH so trimming below still leaves a sharp image.
    const { width = MAX_WIDTH } = await sharp(source, OPTIONS).metadata();
    density = Math.min(72 * Math.max((MAX_WIDTH * 1.5) / width, 1), 600);
  }
  const { data, info } = await sharp(source, { ...OPTIONS, density }).raw().toBuffer({ resolveWithObject: true });
  let image = sharp(data, { ...OPTIONS, raw: info });

  // Figma exports often sit in a transparent margin; trim it so artwork fills its frame on the site.
  const transparentCorner = info.channels === 4 && data[3] === 0;
  if (transparentCorner) {
    const trimmed = await image.trim({ threshold: 10 }).raw().toBuffer({ resolveWithObject: true });
    image = sharp(trimmed.data, { ...OPTIONS, raw: trimmed.info });
  }

  await image
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(output);
}

await mkdir(OUTPUT_DIR, { recursive: true });

const files = (await readdir(SOURCE_DIR)).filter((file) => /\.(svg|png|jpe?g|gif)$/i.test(file));
let before = 0;
let after = 0;

for (const file of files) {
  const source = path.join(SOURCE_DIR, file);
  const { size } = await stat(source);
  if (size < MIN_BYTES) continue;

  const output = path.join(OUTPUT_DIR, `${path.parse(file).name}.webp`);
  if (force || !(await isUpToDate(source, output))) {
    await render(source, output);
    console.log(`optimized ${file}`);
  }
  before += size;
  after += (await stat(output)).size;
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
console.log(`\n${mb(before)} of source images -> ${mb(after)} of WebP`);
