export function AboutHero() {
  return (
    <section className="flex min-h-screen items-center bg-[#3B353B] pt-20 md:pt-24">
      <div className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between px-14 text-white md:flex-row">
        <div className="flex flex-col gap-6">
          <h1 className="inline-block bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 bg-clip-text font-jost text-2xl leading-none font-bold tracking-tight text-transparent md:w-full md:text-6xl">
            ABOUT ME
          </h1>
          <p className="font-jost text-sm md:text-lg">
            I am analytical, growth oriented and hard-working person
            <br />
            with a practical hands-on approach to work.
            <br />
            I am willing to take up any task in a challenging environment
            <br />
            that will allow utilizing my creativity and provide for continuous
            <br />
            professional growth. I solve problems through creative digital
            <br />
            solutions—building user-focused websites and <br /> applications that deliver real impact.
          </p>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="mt-[2px] w-[400px] rounded-t-2xl md:mt-[200px]" src="/images/GloriaProfessional.png" alt="Gloria" />
        </div>
      </div>
    </section>
  );
}
