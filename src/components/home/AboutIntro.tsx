import { LinkButton } from "@/components/ui/LinkButton";

const PARAGRAPH = "font-sans text-base leading-relaxed font-light sm:text-lg md:text-xl lg:text-2xl";

export function AboutIntro() {
  return (
    <section className="relative bg-[#262226] bg-[url(/images/CharcoalSmudgeReal.svg)] bg-cover bg-center">
      <div className="absolute inset-0 z-10 bg-[#262226] opacity-80 mix-blend-multiply" />
      <div className="scroll-reveal relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-4 py-16 text-white sm:px-6 md:flex-row md:gap-12 md:px-8 md:py-24 lg:px-12">
        <div className="flex w-full flex-col space-y-4 text-white sm:space-y-6 md:max-w-xl lg:max-w-2xl">
          <p className={PARAGRAPH}>
            I am a multi-skilled professional in design and coding, focused on building projects that positively impact
            people&apos;s lives
          </p>
          <p className={PARAGRAPH}>
            Although some may argue that a jack of all trades is a master of none, they often overlook that being a jack
            of all trades is often better than being a master of one. I believe my varied expertise brings a unique
            perspective that surpasses those confined to a single field.
          </p>
          <div className="mt-4 flex w-full sm:mt-6 md:mt-10">
            <LinkButton href="/about">Get to know me more</LinkButton>
          </div>
        </div>
        <div className="flex w-full justify-center md:w-2/5 md:shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/optimized/croppedGif.webp"
            alt=""
            loading="lazy"
            className="aspect-square w-3/5 max-w-sm sm:w-1/2 md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
