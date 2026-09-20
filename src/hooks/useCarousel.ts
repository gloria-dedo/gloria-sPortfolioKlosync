"use client";

import { useCallback, useEffect, useState } from "react";

export function useCarousel(length: number, initialIndex = 0) {
  const [index, setIndex] = useState(initialIndex);

  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + length) % length), [length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prev();
      else if (event.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  return { index, next, prev };
}
