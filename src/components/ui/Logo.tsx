import { useId } from "react";

/** "GD" monogram for Gloria Dede. Kept in sync with src/app/icon.svg, which is the favicon. */
export function Logo({ className = "" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden className={className}>
      <defs>
        <linearGradient id={gradientId} x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBCFE8" />
          <stop offset="1" stopColor="#FF99FF" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22.5" fill="#262226" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
      <g stroke={`url(#${gradientId})`} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.3 18.7a7.5 7.5 0 1 0 0 10.6V24.5H18" />
        <path d="M27 16.5h3a7.5 7.5 0 0 1 0 15h-3z" />
      </g>
    </svg>
  );
}
