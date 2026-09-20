"use client";

import { useState } from "react";

/** Items open and close independently of one another. */
export function useAccordion() {
  const [openItems, setOpenItems] = useState<ReadonlySet<number>>(new Set());

  const toggle = (index: number) =>
    setOpenItems((current) => {
      const next = new Set(current);
      if (!next.delete(index)) next.add(index);
      return next;
    });

  return { isOpen: (index: number) => openItems.has(index), toggle };
}
