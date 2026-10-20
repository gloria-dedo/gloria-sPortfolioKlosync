"use client";

import { useCallback, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";

const SWIPE_DISTANCE = 50;

export function useCarousel(length: number, initialIndex = 0) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + length) % length), [length]);
  const goTo = useCallback((i: number) => setIndex(i), []);

  /** Spread onto the carousel's container: arrow keys while it has focus, and swipes on touch screens. */
  const regionProps = {
    tabIndex: 0,
    onKeyDown: (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prev();
      else if (event.key === "ArrowRight") next();
    },
    onTouchStart: (event: TouchEvent) => {
      touchStartX.current = event.touches[0].clientX;
    },
    onTouchEnd: (event: TouchEvent) => {
      if (touchStartX.current === null) return;
      const distance = event.changedTouches[0].clientX - touchStartX.current;
      if (distance > SWIPE_DISTANCE) prev();
      else if (distance < -SWIPE_DISTANCE) next();
      touchStartX.current = null;
    },
  };

  return { index, next, prev, goTo, regionProps };
}
