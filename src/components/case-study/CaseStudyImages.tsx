import { CaseStudyVideo } from "./CaseStudyVideo";
import { SkeletonImage } from "@/components/ui/SkeletonImage";
import type { CaseStudyImage } from "@/data/projects";

type Row = { type: "wide"; image: CaseStudyImage } | { type: "pair"; images: CaseStudyImage[] };

/** Consecutive "half" images are laid out side by side as one row. */
function toRows(images: CaseStudyImage[]): Row[] {
  return images.reduce<Row[]>((rows, image) => {
    const last = rows[rows.length - 1];
    if (image.size !== "half") rows.push({ type: "wide", image });
    else if (last?.type === "pair" && last.images.length < 2) last.images.push(image);
    else rows.push({ type: "pair", images: [image] });
    return rows;
  }, []);
}

const FRAME = "flex w-full items-center justify-center overflow-hidden rounded-xl p-1.5 sm:p-2 md:rounded-2xl";

const WIDE_MEDIA = "block h-auto w-full rounded-md md:rounded-lg";
const PAIR_MEDIA = "block h-auto w-full rounded-md sm:h-full sm:object-contain md:rounded-lg";
/** Finished mockups carry their own background, so they sit edge to edge with no frame */
const FILL_FRAME = "block w-full overflow-hidden rounded-xl md:rounded-2xl";
const FILL_MEDIA = "block h-auto w-full";

/** An image, or a screen recording when the item has a `video`. */
function Media({ media, wrapperClassName, className, priority = false }: {
  media: CaseStudyImage;
  wrapperClassName: string;
  className: string;
  priority?: boolean;
}) {
  if (media.video) {
    return (
      <div className={wrapperClassName}>
        <CaseStudyVideo media={{ ...media, video: media.video }} className={className} />
      </div>
    );
  }
  return (
    <SkeletonImage src={media.src} alt={media.alt} priority={priority} wrapperClassName={wrapperClassName} className={className} />
  );
}

export function CaseStudyFrame({ image, frameBg, priority = false }: { image: CaseStudyImage; frameBg: string; priority?: boolean }) {
  if (image.fill) return <Media media={image} priority={priority} wrapperClassName={FILL_FRAME} className={FILL_MEDIA} />;
  return <Media media={image} priority={priority} wrapperClassName={`${FRAME} ${image.bg ?? frameBg} min-h-40`} className={WIDE_MEDIA} />;
}

export function CaseStudyImages({ images, frameBg }: { images: CaseStudyImage[]; frameBg: string }) {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {toRows(images).map((row) =>
        row.type === "wide" ? (
          <CaseStudyFrame key={row.image.src} image={row.image} frameBg={frameBg} />
        ) : (
          <div key={row.images[0].src} className="grid gap-4 sm:grid-cols-2 md:gap-6">
            {row.images.map((image) => (
              <Media
                key={image.src}
                media={image}
                wrapperClassName={image.fill ? FILL_FRAME : `${FRAME} ${image.bg ?? frameBg} min-h-40`}
                className={image.fill ? FILL_MEDIA : PAIR_MEDIA}
              />
            ))}
          </div>
        ),
      )}
    </div>
  );
}
