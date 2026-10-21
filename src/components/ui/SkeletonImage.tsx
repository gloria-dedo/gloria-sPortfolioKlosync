"use client";

import { Skeleton } from "./Skeleton";
import { useImageLoaded } from "@/hooks/useImageLoaded";

type SkeletonImageProps = {
  src: string;
  alt?: string;
  /** Classes for the container that reserves the image's space (size, background, radius, hover) */
  wrapperClassName?: string;
  /** Classes for the <img> itself */
  className?: string;
  /** Load straight away instead of when scrolled near, for images in the first screen */
  priority?: boolean;
};

/**
 * An image with a shimmering skeleton behind it while it downloads. The image is never hidden by
 * JavaScript, so it appears as soon as the browser has it, even before React has loaded.
 */
export function SkeletonImage({
  src,
  alt = "",
  wrapperClassName = "",
  className = "",
  priority = false,
}: SkeletonImageProps) {
  const { ref, loaded, onLoad, onError } = useImageLoaded(src);
  const position = /\b(absolute|fixed)\b/.test(wrapperClassName) ? "" : "relative";

  return (
    <div className={`${position} ${wrapperClassName}`}>
      {!loaded && <Skeleton className="absolute inset-0 z-0 rounded-[inherit]" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={onLoad}
        onError={onError}
        className={`relative z-[1] ${className}`}
      />
    </div>
  );
}
