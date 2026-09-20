"use client";

import { useEffect, useRef, useState } from "react";

/** Tracks whether an <img> has finished loading so a skeleton can cover it until then. */
export function useImageLoaded(src: string) {
  const ref = useRef<HTMLImageElement>(null);
  const [settledSrc, setSettledSrc] = useState<string | null>(null);

  useEffect(() => {
    // The image may already be cached and complete before hydration attaches onLoad.
    if (ref.current?.complete) setSettledSrc(src);
  }, [src]);

  return {
    ref,
    loaded: settledSrc === src,
    onLoad: () => setSettledSrc(src),
    onError: () => setSettledSrc(src),
  };
}
