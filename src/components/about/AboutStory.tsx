import { FaArrowDown } from "react-icons/fa6";
import { RESUME_URL } from "@/data/site";

const CARD = "flex flex-col gap-6 rounded-2xl border border-[#A69CA6] bg-[#544D54] p-5 md:p-6";

export function AboutStory() {
  return (
    <section className="relative bg-[#262226] bg-[url(/images/optimized/2ndImage.webp)] bg-cover bg-center">
      <div className="absolute inset-0 z-10 bg-[#262226] opacity-90 mix-blend-multiply" />

      <div className="relative z-20 mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 text-white sm:px-6 md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-12 md:py-24">
        <div className="flex flex-col gap-5 font-sans">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">I BRING TO LIFE WHAT IS NOT</h2>
          <p className="max-w-xl text-sm leading-relaxed font-light text-white/85 md:text-lg">
            I sketch in silence what the world has never seen, pixels bloom where there was only dream. A whisper of an
            idea, a fleeting thought, I cradle it gently, bring to life what is not. Blank screens don&apos;t scare me;
            they beg to be told of buttons that beckon and colors that hold. I carve out meaning in every scroll and
            slide, designing the path where users confide. I speak in structure, fluid, precise, code is my compass,
            clean and concise. From shadows and shapes, from type and tone, I craft new worlds with lines alone.
          </p>
        </div>

        <div className="flex flex-col gap-5 font-sans">
          <div className={CARD}>
            <p className="text-sm leading-relaxed text-white md:text-base">
              I&apos;m a <span className="font-bold text-[#FF99FF]">skilled</span> product designer and frontend engineer
              with a strong focus on delivering seamless user experiences and effective digital solutions.
            </p>
            <a
              href={RESUME_URL}
              download
              className="flex w-fit items-center gap-3 rounded-full bg-[#3B353B] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-300 hover:text-black"
            >
              <FaArrowDown aria-hidden />
              Download Resume
            </a>
          </div>

          <div className={CARD}>
            <h3 className="w-fit bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 bg-clip-text font-display text-xl font-bold tracking-tight text-transparent uppercase">
              Education
            </h3>
            <div className="flex gap-5">
              <p className="shrink-0 pt-1 text-xs text-[#CCC4CC]">2021–2024</p>
              <div>
                <p className="text-base font-medium text-white md:text-lg">BSc. Information Technology</p>
                <p className="text-sm text-[#CCC4CC]">Ghana Communication Technology University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
