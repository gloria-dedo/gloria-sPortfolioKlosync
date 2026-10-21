import { Skeleton as HeroSkeleton } from "@heroui/react/skeleton";

type SkeletonProps = {
  /** Size, shape and position. A `bg-*` class overrides the default tint. */
  className?: string;
  animation?: "shimmer" | "pulse" | "none";
};

/** HeroUI shimmering placeholder, tinted to the site's palette in globals.css. */
export function Skeleton({ className = "", animation = "shimmer" }: SkeletonProps) {
  return <HeroSkeleton aria-hidden animationType={animation} className={className} />;
}
