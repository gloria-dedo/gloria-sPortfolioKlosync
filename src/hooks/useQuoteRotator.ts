"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DURATION_MS = 5000;
const TICK_MS = 100;
const FADE_MS = 500;

/** Auto-rotating quotes with a progress value (0-100), a fade phase and hover-to-pause. */
export function useQuoteRotator(count: number) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const goTo = useCallback((target: number) => {
    clearTimeout(fadeTimer.current);
    setVisible(false);
    fadeTimer.current = setTimeout(() => {
      setIndex(target);
      setProgress(0);
      setVisible(true);
    }, FADE_MS);
  }, []);

  useEffect(() => () => clearTimeout(fadeTimer.current), []);

  useEffect(() => {
    if (paused || !visible || progress >= 100) return;
    const timer = setInterval(
      () => setProgress((p) => Math.min(100, p + (TICK_MS / DURATION_MS) * 100)),
      TICK_MS,
    );
    return () => clearInterval(timer);
  }, [paused, visible, progress]);

  useEffect(() => {
    if (progress >= 100) goTo((index + 1) % count);
  }, [progress, index, count, goTo]);

  return { index, progress, visible, goTo, pause: () => setPaused(true), resume: () => setPaused(false) };
}
