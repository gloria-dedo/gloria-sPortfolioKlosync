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

/** An image that shows a pulsing skeleton over its container until it has loaded. */
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
      {!loaded && <Skeleton className="absolute inset-0 rounded-[inherit] bg-gray-400/30" />}
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
        className={`${className} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
