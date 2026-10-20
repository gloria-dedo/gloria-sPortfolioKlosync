export function AboutHero() {
  return (
    <section className="bg-[#3B353B] pt-24 md:pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-end gap-10 px-4 text-white sm:px-6 md:grid-cols-[1.2fr_1fr] md:gap-12 md:px-12">
        <div className="flex flex-col gap-6 md:pb-16">
          <h1 className="w-fit bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 bg-clip-text font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-none font-bold tracking-tight text-transparent">
            ABOUT ME
          </h1>
          <p className="max-w-xl font-sans text-base leading-relaxed font-light text-white/85 md:text-lg">
            I am an analytical, growth-oriented and hard-working person with a practical, hands-on approach to work. I am
            willing to take up any task in a challenging environment that allows me to use my creativity and keep
            growing professionally. I solve problems through creative digital solutions, building user-focused websites
            and applications that deliver real impact.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mx-auto w-full max-w-[280px] rounded-t-2xl sm:max-w-sm md:mx-0 md:ml-auto"
          src="/images/optimized/GloriaProfessional.webp"
          alt="Gloria Dede Tetteh"
        />
      </div>
    </section>
  );
}
