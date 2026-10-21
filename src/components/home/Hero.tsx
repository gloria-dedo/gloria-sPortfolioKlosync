import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col bg-[#262226] bg-[url(/images/hero-portrait.jpg)] bg-cover bg-center bg-no-repeat text-center md:bg-[url(/images/hero-portrait-wide.jpg)]">
      {/* Fills the screen without zooming in: on wider screens the untouched portrait sits in the middle of a frame
          whose sides continue its studio backdrop. One flat dark overlay over it so the text reads. */}
      <div aria-hidden className="absolute inset-0 z-0 bg-black/55" />

      <div className="scroll-reveal relative z-10 flex flex-1 flex-col items-center justify-center gap-6 px-4 pt-20 pb-36 text-white sm:gap-8 sm:px-6 md:gap-10 lg:px-8">
        <h1 className="w-full max-w-6xl bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 bg-clip-text font-display text-[clamp(2.25rem,8vw,6.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-balance text-transparent">
          GLORIA DEDE TETTEH
        </h1>
        <p className="px-4 font-sans text-sm font-medium sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          PRODUCT DESIGNER &amp; FRONTEND ENGINEER
        </p>
        <div className="mt-4 flex justify-center md:mt-8">
          <LinkButton href="/projects">View my projects</LinkButton>
        </div>
      </div>

      {/* Scroll indicator on the left, location badge attached to the right edge of the screen */}
      <div className="absolute inset-x-0 bottom-24 z-10 flex items-center justify-between pl-4 sm:pl-6 md:bottom-28 md:pl-8">
        <span
          aria-hidden
          className="flex h-9 w-[18px] justify-center rounded-full border-[1.5px] border-[#FF99FF] pt-2 md:h-11 md:w-[22px]"
        >
          <span className="fade-bounce-fast h-[5px] w-[5px] rounded-full bg-[#FF99FF] md:h-1.5 md:w-1.5" />
        </span>

        <div className="flex items-center gap-2 rounded-l-full bg-[rgba(38,34,38,0.6)] py-1.5 pr-4 pl-1.5 text-white backdrop-blur-sm sm:gap-3 md:pr-6">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[#FF99FF] bg-[#FF99FF] md:h-14 md:w-14 lg:h-16 lg:w-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/optimized/globeGloria.webp" alt="" className="h-full w-full object-cover" />
          </div>
          <p className="text-left font-sans text-xs leading-snug font-light sm:text-sm">
            Based in Ghana
            <br />
            West Africa
          </p>
        </div>
      </div>
    </section>
  );
}
