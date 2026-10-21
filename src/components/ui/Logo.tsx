import { useId } from "react";

/** One broad anemone petal, drawn from the centre (50,50) upward with a slight lean so the ring overlaps like a pinwheel. */
const PETAL = "M50 51 C 40 47, 29 33, 31 21 C 33 10, 44 6, 52 8 C 62 10, 70 19, 67 31 C 64 42, 56 48, 50 51 Z";
const VEIN = "M50 50 C 49 38, 48 26, 49 16";

const ring = (count: number, offset: number, scale: number) =>
  Array.from({ length: count }, (_, i) => `rotate(${offset + (360 / count) * i} 50 50) translate(50 50) scale(${scale}) translate(-50 -50)`);

const OUTER = ring(6, 12, 1);
const INNER = ring(6, 42, 0.8);

const STAMENS = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2 + 0.12;
  const radius = 12.5 + (i % 2) * 2.2;
  return { x: +(50 + Math.cos(angle) * radius).toFixed(2), y: +(50 + Math.sin(angle) * radius).toFixed(2) };
});

const POLLEN = Array.from({ length: 9 }, (_, i) => {
  const angle = i * 2.4;
  const radius = Math.sqrt(i) * 1.9;
  return { x: +(50 + Math.cos(angle) * radius).toFixed(2), y: +(50 + Math.sin(angle) * radius).toFixed(2) };
});

/** Anemone mark for Gloria Dede. src/app/icon.svg is its simplified twin (no stamens), used as the favicon. */
export function Logo({ className = "" }: { className?: string }) {
  const id = useId();
  const outer = `${id}-outer`, inner = `${id}-inner`, core = `${id}-core`;

  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden className={className}>
      <defs>
        <radialGradient id={outer} cx="50" cy="50" r="44" gradientUnits="userSpaceOnUse">
          <stop offset=".15" stopColor="#4c2f94" />
          <stop offset=".55" stopColor="#7a58cc" />
          <stop offset="1" stopColor="#b39cf0" />
        </radialGradient>
        <radialGradient id={inner} cx="50" cy="50" r="38" gradientUnits="userSpaceOnUse">
          <stop offset=".12" stopColor="#7b3fd1" />
          <stop offset=".5" stopColor="#b98cf3" />
          <stop offset="1" stopColor="#efe0ff" />
        </radialGradient>
        <radialGradient id={core} cx="47" cy="47" r="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e2b3c4" />
          <stop offset=".6" stopColor="#9a6079" />
          <stop offset="1" stopColor="#5e3348" />
        </radialGradient>
      </defs>
      {[
        { transforms: OUTER, fill: outer, edge: "#2e1a63" },
        { transforms: INNER, fill: inner, edge: "#4a2590" },
      ].map(({ transforms, fill, edge }) =>
        transforms.map((transform) => (
          <g key={`${fill}${transform}`} transform={transform}>
            <path d={PETAL} fill={`url(#${fill})`} stroke={edge} strokeWidth=".7" strokeOpacity=".55" />
            <path d={VEIN} stroke="#fff" strokeOpacity=".22" strokeWidth=".7" strokeLinecap="round" />
          </g>
        )),
      )}
      {STAMENS.map(({ x, y }) => (
        <g key={`${x},${y}`}>
          <line x1="50" y1="50" x2={x} y2={y} stroke="#dcb6ff" strokeWidth=".8" strokeLinecap="round" />
          <circle cx={x} cy={y} r="1.45" fill="#f3dcff" />
        </g>
      ))}
      <circle cx="50" cy="50" r="8" fill={`url(#${core})`} />
      {POLLEN.map(({ x, y }) => (
        <circle key={`${x},${y}`} cx={x} cy={y} r=".7" fill="#f4d3e1" opacity=".75" />
      ))}
    </svg>
  );
}
