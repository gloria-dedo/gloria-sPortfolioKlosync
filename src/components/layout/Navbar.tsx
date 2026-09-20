"use client";

import { FaVolumeHigh, FaVolumeXmark, FaXmark } from "react-icons/fa6";
import { MenuOverlay } from "./MenuOverlay";
import { useAudioToggle } from "@/hooks/useAudioToggle";
import { useMenu } from "@/hooks/useMenu";
import { useScrolled } from "@/hooks/useScrolled";

const SCROLLED_STYLE =
  "bg-[#3B353B] shadow-[0_4px_24px_0_rgba(0,0,0,0.15),0_1.5px_4px_0_rgba(255,153,255,0.10)]";

export function Navbar() {
  const { isOpen, toggle, close } = useMenu();
  const { isPlaying, toggle: toggleSound } = useAudioToggle("/audio/theOrdinary.mp3");
  const scrolled = useScrolled(70);
  const SoundIcon = isPlaying ? FaVolumeHigh : FaVolumeXmark;

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between px-6 py-9 transition-[background-color,box-shadow] duration-300 ${scrolled ? SCROLLED_STYLE : ""}`}
      >
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isPlaying ? "Mute music" : "Play music"}
          className="cursor-pointer text-2xl text-white transition-colors hover:text-gray-300 sm:text-3xl md:text-4xl"
        >
          <SoundIcon />
        </button>

        <button
          type="button"
          onClick={toggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="text-2xl text-white transition-transform hover:scale-110 focus:outline-none"
        >
          {isOpen ? (
            <FaXmark className="text-2xl text-white" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/images/tabmenu.svg" alt="Menu" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
          )}
        </button>
      </nav>
      <MenuOverlay isOpen={isOpen} onNavigate={close} />
    </>
  );
}
