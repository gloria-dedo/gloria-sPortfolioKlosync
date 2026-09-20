import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[url(/images/heroImage.svg)] bg-cover bg-center p-[50px] text-center">
      <div className="absolute inset-0 z-0 h-full bg-[url('/images/CharcoalSmudge.svg')] opacity-90 mix-blend-multiply" />

      <div className="scroll-reveal relative z-10 flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-white sm:px-6 lg:px-8">
        <div className="relative z-10 flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
            <h1 className="inline-block w-full bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 bg-clip-text font-alatsi text-2xl leading-none font-bold tracking-[-0.02em] text-transparent sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl">
              GLORIA DEDE TETTEH
            </h1>
            <h3 className="px-4 font-jost text-sm font-medium sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              UI/UX DESIGNER &amp; FRONTEND DEVELOPER
            </h3>
          </div>
          <div className="mt-8 flex w-full items-center justify-center sm:w-3/4 md:mt-14 md:w-2/3 lg:w-1/2">
            <LinkButton href="/projects">View my projects</LinkButton>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 flex w-full justify-between px-4 pb-4">
          <h4 className="flex items-center rounded-full border-2 border-[#FF99FF] px-2 py-3 sm:py-4 md:py-5">
            <span className="fade-bounce-fast inline-block h-[8px] w-[8px] rounded-full bg-[#FF99FF] align-middle sm:h-[10px] sm:w-[10px]" />
          </h4>
          <div className="py-4 sm:py-6">
            <div className="flex items-center gap-2 rounded-l-full bg-[rgba(38,34,38,0.5)] px-2 py-1 sm:gap-3 md:gap-4 md:px-3 md:py-2">
              <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#FF99FF] bg-[#FF99FF] sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-[60px] lg:w-[60px] xl:h-[70px] xl:w-[70px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/globeGloria.gif" alt="location" className="h-full w-full object-cover" />
              </div>
              <p className="font-jost text-xs sm:text-sm">
                Based in Ghana
                <br />
                West Africa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
