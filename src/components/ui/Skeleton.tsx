/** Pulsing placeholder block. Size and shape come from `className`; pass a `bg-*` class to override the tint. */
export function Skeleton({ className = "" }: { className?: string }) {
  const tint = className.includes("bg-") ? "" : "bg-white/20";
  return <div aria-hidden className={`animate-pulse ${tint} ${className}`} />;
}
