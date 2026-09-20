"use client";

import { useState } from "react";

export function useTabs<T extends string>(initial: T) {
  const [active, setActive] = useState<T>(initial);
  return { active, setActive, isActive: (id: T) => id === active };
}
