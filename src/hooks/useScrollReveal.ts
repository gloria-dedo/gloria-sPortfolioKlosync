"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Adds `.scrolled` to every `.scroll-reveal` element once it enters the viewport. */
export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("scrolled");
          observer.unobserve(entry.target);
        }),
      { rootMargin: "0px 0px -150px 0px" },
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
