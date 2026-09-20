import { LinkButton } from "@/components/ui/LinkButton";

const PARAGRAPH = "font-jost text-base leading-relaxed font-normal sm:text-lg md:text-xl lg:text-2xl";

export function AboutIntro() {
  return (
    <section className="relative min-h-screen bg-[url(/images/CharcoalSmudgeReal.svg)] bg-cover bg-center">
      <div className="absolute inset-0 z-10 bg-[#262226] opacity-80 mix-blend-multiply" />
      <div className="scroll-reveal relative z-20 flex min-h-screen w-full flex-col items-center justify-between px-4 py-8 text-white sm:px-6 md:flex-row md:px-8 md:py-0 lg:px-12">
        <div className="mt-8 flex w-full flex-col space-y-4 text-white sm:mt-12 sm:space-y-6 md:mt-20 md:max-w-xl lg:max-w-2xl">
          <p className={PARAGRAPH}>
            I am a multi-skilled professional in design and coding, focused on building projects that positively impact
            people&apos;s lives
          </p>
          <p className={PARAGRAPH}>
            Although some may argue that a jack of all trades is a master of none, they often overlook that being a jack
            of all trades is often better than being a master of one. I believe my varied expertise brings a unique
            perspective that surpasses those confined to a single field.
          </p>
          <div className="mt-6 flex w-full sm:mt-8 md:mt-14">
            <LinkButton href="/about">Get to know me more</LinkButton>
          </div>
        </div>
        <div className="mt-8 flex w-full justify-center md:mt-0 md:w-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/croppedGif.gif" alt="globe" className="w-3/4 max-w-md sm:w-2/3 md:w-full lg:min-w-sm" />
        </div>
      </div>
    </section>
  );
}
