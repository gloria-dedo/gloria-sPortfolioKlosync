// Sweet Cheeks dessert box system: one "cake layers" pattern, ten flavour colourways.
// Panels are drawn at 600 x 800 (front/back) and 220 x 800 (sides) and scaled with CSS.

const FLAVOURS = [
  { name: "Red Velvet", note: "Cream cheese frosting", base: "#6a0f35", ink: "#4b0322", bands: ["#fc8aac", "#f9d6e0", "#4b0322", "#c2185b"], cell: "#f7d3de" },
  { name: "Fudge Brownie", note: "Dark chocolate ganache", base: "#4a2c22", ink: "#3a2018", bands: ["#c08457", "#f2d3c2", "#2e1a14", "#8b5e3c"], cell: "#ead6c8" },
  { name: "Peanut Butter", note: "Salted peanut glaze", base: "#c68642", ink: "#6b3d14", bands: ["#f3d9a4", "#7a4a1e", "#fbefd9", "#9e6b35"], cell: "#f4e4c8" },
  { name: "Lemon Drizzle", note: "Zesty lemon icing", base: "#f2c84b", ink: "#7a5a00", bands: ["#fff6d6", "#e2a72e", "#ffffff", "#9bb84a"], cell: "#fbf1c6" },
  { name: "Cookies & Cream", note: "Crushed cookie crumb", base: "#1e1a1c", ink: "#1e1a1c", bands: ["#f4f1ec", "#6b6466", "#ffffff", "#2e2a2c"], cell: "#dedad6" },
  { name: "Strawberry Shortcake", note: "Fresh berry compote", base: "#f06a8a", ink: "#a3173f", bands: ["#ffe3ea", "#c8284f", "#fff7f0", "#f9a9be"], cell: "#fcdde5" },
  { name: "Pistachio", note: "Roasted pistachio cream", base: "#8db37a", ink: "#3c5e2e", bands: ["#e9f1dc", "#4f7a3e", "#f7f3e6", "#b9d49a"], cell: "#e3eed7" },
  { name: "Blueberry Cheesecake", note: "Baked vanilla cheesecake", base: "#5b4b8a", ink: "#2f2457", bands: ["#e6e0f5", "#2f2457", "#fff8ee", "#9e8bd6"], cell: "#e4def3" },
  { name: "Salted Caramel", note: "Golden caramel drip", base: "#b5652b", ink: "#6e3517", bands: ["#f7e1c6", "#6e3517", "#fff3e4", "#e09a55"], cell: "#f2ddc6" },
  { name: "Mocha", note: "Espresso buttercream", base: "#3b2a26", ink: "#2a1c19", bands: ["#c9a27e", "#f3e6d9", "#1f1513", "#8c6a50"], cell: "#e6d6c9" },
];

// Seeded random so every pack renders identically.
function rng(seed) { let s = seed * 9301 + 49297; return () => ((s = (s * 9301 + 49297) % 233280) / 233280); }

// Wavy stacked bands, like the layers of a cake slice, plus a frosting drip along the top.
function layersSvg(f, i, w = 600, h = 800, opts = {}) {
  const r = rng(i + 3);
  const top = opts.top ?? 380, amp = 24, step = 50;
  let bands = "";
  for (let k = 0; k < 14; k++) {
    const y = top + k * step, ph = r() * 6.28, fq = 1.6 + r() * 0.9;
    let d = `M -60 ${y}`;
    for (let x = -60; x <= w + 60; x += 20) d += ` L ${x} ${(y + Math.sin((x / w) * fq * 6.28 + ph) * amp + Math.sin((x / w) * 2.3 * 6.28 + ph * 1.7) * amp * 0.35).toFixed(1)}`;
    d += ` L ${w + 60} ${h + 200} L -60 ${h + 200} Z`;
    bands += `<path d="${d}" fill="${f.bands[k % 4]}"/>`;
  }
  let drip = "";
  if (!opts.noDrip) {
    // Frosting along the top edge with rounded drips of varying length.
    const base = 58, drips = [];
    for (let x = 30 + r() * 30; x < w - 20; x += 62 + r() * 34) drips.push({ c: x, wd: 30 + r() * 22, len: 18 + r() * 96 });
    let d = `M 0 0 L ${w} 0 L ${w} ${base}`;
    for (const { c, wd, len } of drips.reverse()) {
      const a = c + wd / 2, b = c - wd / 2, y = base + len;
      d += ` L ${a} ${base} C ${a} ${base + len * 0.55}, ${a} ${y}, ${c} ${y} C ${b} ${y}, ${b} ${base + len * 0.55}, ${b} ${base}`;
    }
    d += ` L 0 ${base} Z`;
    drip = `<path d="${d}" fill="#fff8f2"/>`;
  }
  let sprinkles = "";
  if (!opts.noSprinkles) {
    for (let k = 0; k < 34; k++) {
      const x = 20 + r() * (w - 40), y = 120 + r() * (top - 150);
      if (x > 70 && x < w - 70 && y > 120 && y < 360 && w > 300) continue; // keep clear of the label
      sprinkles += `<rect x="${x}" y="${y}" width="16" height="5" rx="2.5" fill="${[f.bands[0], f.bands[2], "#fff8f2"][k % 3]}" transform="rotate(${(r() * 180).toFixed(0)} ${x + 8} ${y + 2.5})"/>`;
    }
  }
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" style="position:absolute;inset:0;display:block"><rect width="${w}" height="${h}" fill="${f.base}"/><g transform="rotate(-7 ${w / 2} ${h / 2})">${bands}</g>${sprinkles}${drip}</svg>`;
}

function front(f, i, h = 800) {
  return `<div class="panel front-panel" style="--ink:${f.ink}; height:${h}px">
    ${layersSvg(f, i, 600, h, { top: Math.round(h * 0.475) })}
    <div class="label">
      <span class="wm" style="background:${f.ink}; width:290px"></span>
      <div class="rule" style="background:${f.ink}"></div>
      <div class="flavour" style="color:${f.ink}">${f.name}</div>
      <div class="note" style="color:${f.ink}">${f.note}</div>
    </div>
    <div class="badge" style="color:${f.ink}"><span class="heart"></span><b>Baked<br>fresh daily</b></div>
    <div class="weight">Cake slice · 180 g</div>
  </div>`;
}

function side(f, i) {
  return `<div class="panel side-panel">${layersSvg(f, i + 20, 220, 800, { top: 300, noSprinkles: true })}
    <div class="side-tag">Unapologetically sweet · Dangerously good</div></div>`;
}

function back(f) {
  const bars = Array.from({ length: 46 }, (_, k) => `<i style="width:${[2, 3, 1, 4, 2][k % 5]}px"></i>`).join("");
  return `<div class="panel back-panel" style="--ink:${f.ink}">
    <div style="height:120px; background:${f.base}"></div>
    <div class="back-body">
      <span class="wm" style="background:${f.ink}; width:180px"></span>
      <p class="blurb">A generous slice of ${f.name.toLowerCase()}, layered thick and finished by hand with ${f.note.toLowerCase()}. Baked fresh every morning in our Accra kitchen.</p>
      <div class="cols">
        <div><h4>Ingredients</h4><p>Wheat flour, sugar, butter, free-range eggs, cream cheese, whole milk, cocoa, vanilla, raising agents, salt.</p><h4>Allergens</h4><p>Contains gluten, milk, eggs. May contain nuts and soy.</p></div>
        <div><h4>Nutrition per 100 g</h4>
          <table><tr><td>Energy</td><td>1,620 kJ</td></tr><tr><td>Fat</td><td>21 g</td></tr><tr><td>Carbohydrate</td><td>48 g</td></tr><tr><td>Sugars</td><td>31 g</td></tr><tr><td>Protein</td><td>5 g</td></tr><tr><td>Salt</td><td>0.4 g</td></tr></table></div>
      </div>
      <div class="foot"><div><b>Best enjoyed within 3 days.</b><br>Keep refrigerated.<br>hello@sweetcheeks.com</div><div class="barcode">${bars}</div></div>
    </div>
  </div>`;
}

function lid(f, i) {
  return `<div class="panel lid-panel" style="background:${f.base}; display:grid; place-items:center"><span class="wm" style="background:#fff8f2; width:300px"></span></div>`;
}
