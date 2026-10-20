"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

/** Where to go when there is no earlier page on this site, e.g. a project opened from a shared link. */
function parentPath(pathname: string) {
  return pathname.startsWith("/projects/") ? "/projects" : "/";
}

/** Goes back to the previous page on this site, or up to the parent page if the visitor arrived here directly. */
export function BackButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const firstPath = useRef(pathname);
  const navigatedInApp = useRef(false);

  useEffect(() => {
    if (pathname !== firstPath.current) navigatedInApp.current = true;
  }, [pathname]);

  if (pathname === "/") return null;

  const goBack = () => {
    if (navigatedInApp.current) router.back();
    else router.push(parentPath(pathname));
  };

  return (
    <button
      type="button"
      onClick={goBack}
      aria-label="Go back"
      className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#262226]/60 text-white ring-1 ring-white/15 backdrop-blur-sm transition-colors hover:bg-white hover:text-[#262226] md:h-12 md:w-12 ${className}`}
    >
      <FaArrowLeftLong className="text-sm md:text-base" />
    </button>
  );
}
