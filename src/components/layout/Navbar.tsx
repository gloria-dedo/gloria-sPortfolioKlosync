"use client";

import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { BackButton } from "./BackButton";
import { MenuOverlay } from "./MenuOverlay";
import { Logo } from "@/components/ui/Logo";
import { useMenu } from "@/hooks/useMenu";

export function Navbar() {
  const { isOpen, toggle, close } = useMenu();

  return (
    <>
      <nav className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between px-4 py-4 sm:px-6 md:px-8 md:py-6">
        <div className="pointer-events-auto flex items-center gap-3">
          <Link
            href="/"
            onClick={close}
            aria-label="Gloria Dede Tetteh, home"
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform hover:scale-105"
          >
            <Logo className="h-10 w-10 md:h-12 md:w-12" />
          </Link>
          <BackButton className={isOpen ? "invisible" : ""} />
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="pointer-events-auto flex h-10 w-10 cursor-pointer items-center justify-center text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-transform hover:scale-110 focus:outline-none md:h-12 md:w-12"
        >
          {isOpen ? (
            <FaXmark className="text-2xl md:text-3xl" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/tabmenu.svg" alt="" className="h-6 w-6 md:h-8 md:w-8" />
          )}
        </button>
      </nav>
      <MenuOverlay isOpen={isOpen} onNavigate={close} />
    </>
  );
}
