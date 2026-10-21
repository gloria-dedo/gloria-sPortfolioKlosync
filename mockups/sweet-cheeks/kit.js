// Builds screen viewports and seats 3D packaging on the floor. Sets body[data-ready] when done.
const PAGE_W = 1728; // design width of the website screens

// A viewport of width w onto a page render, showing design px x..x+pw, y..y+h*pw/w.
function view(src, w, h, y, x = 0, pw = PAGE_W) {
  const v = document.createElement("div");
  v.className = "view";
  v.style.width = w + "px"; v.style.height = h + "px";
  const img = new Image(); img.src = src;
  const s = w / pw;
  img.style.width = PAGE_W * s + "px";
  img.style.top = -y * s + "px"; img.style.left = -x * s + "px";
  v.appendChild(img);
  return v;
}
const pageH = (src) => new Promise((r) => { const i = new Image(); i.onload = () => r(i.naturalHeight * PAGE_W / i.naturalWidth); i.src = src; });
const bar = () => { const b = document.createElement("div"); b.className = "bar"; b.innerHTML = '<b></b><b></b><b></b><span class="url"></span>'; return b; };

function seat(scene) {
  const board = scene.offsetParent.getBoundingClientRect(); // floor and shadows are relative to the scene's container
  const base = () => {
    const rects = [...scene.querySelectorAll(".f.bottom")].map((f) => f.getBoundingClientRect());
    return { l: Math.min(...rects.map((r) => r.left)), r: Math.max(...rects.map((r) => r.right)), t: Math.min(...rects.map((r) => r.top)), b: Math.max(...rects.map((r) => r.bottom)) };
  };
  const f = scene.dataset.floor, floor = f.endsWith("%") ? (parseFloat(f) / 100) * board.height : +f;
  scene.style.top = parseFloat(scene.style.top) + (floor - (base().b - board.top)) + "px";
  const r = base();
  const cx = (r.l + r.r) / 2 - board.left, cy = (r.t + r.b) / 2 - board.top, w = r.r - r.l, h = r.b - r.t;
  const tone = scene.dataset.shade || "92,40,48";
  const add = (sw, sh, a, blur, dx, dy) => {
    const s = document.createElement("div"); s.className = "shadow";
    Object.assign(s.style, { left: cx - sw / 2 + dx + "px", top: cy - sh / 2 + dy + "px", width: sw + "px", height: sh + "px", filter: `blur(${blur}px)`, background: `radial-gradient(closest-side, rgba(${tone},${a}), rgba(${tone},0))` });
    scene.before(s);
  };
  add(w * 1.5, h * 1.6 + 50, 0.22, 22, w * 0.12, 22); // long soft cast shadow, pushed away from the light
  add(w * 1.02, h * 1.0, 0.42, 6, 0, 6);               // contact shadow
}

(async () => {
  for (const el of document.querySelectorAll("[data-win]")) {
    const w = parseFloat(el.style.width);
    const h = el.dataset.full !== undefined ? await pageH(el.dataset.src) : +el.dataset.h;
    if (el.dataset.nobar === undefined) el.append(bar());
    el.append(view(el.dataset.src, w, Math.round(h * w / PAGE_W), +(el.dataset.y || 0)));
  }
  for (const el of document.querySelectorAll("[data-crop]")) {
    const w = parseFloat(el.style.width), cw = +el.dataset.w;
    el.appendChild(view(el.dataset.src, w, Math.round(+el.dataset.h * w / cw), +el.dataset.y, +el.dataset.x, cw));
  }
  for (const el of document.querySelectorAll("[data-laptop]")) {
    const w = parseFloat(el.style.width) - 36;
    el.innerHTML = '<div class="lid"><div class="screen"></div></div><div class="base"></div>';
    el.querySelector(".screen").appendChild(view(el.dataset.src, w, Math.round(w * 0.625), +(el.dataset.y || 0)));
  }
  await document.fonts.ready;
  document.querySelectorAll(".scene[data-floor]").forEach(seat);
  document.body.dataset.ready = "1";
})();

const only = new URLSearchParams(location.search).get("b");
if (only) document.querySelectorAll(".board").forEach((b) => b.id === only ? b.classList.add("solo") : b.remove());
