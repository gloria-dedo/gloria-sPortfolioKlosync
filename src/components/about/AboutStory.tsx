import { FaArrowDown } from "react-icons/fa6";
import { RESUME_URL } from "@/data/site";

const CARD = "flex flex-col gap-8 rounded-2xl border border-[#A69CA6] bg-[#544D54]";

export function AboutStory() {
  return (
    <section className="relative min-h-screen bg-[url(/images/2ndImage.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 z-10 bg-[#262226] opacity-90 mix-blend-multiply" />

      <div className="relative z-20 flex h-full min-h-screen w-full flex-col items-center justify-around space-y-9 px-2 py-[10%] md:flex-row md:justify-between md:px-20">
        <div className="flex flex-col gap-6 text-center font-jost text-white md:text-left">
          <h1 className="text-lg font-bold md:text-2xl">I BRING TO LIFE WHAT IS NOT</h1>
          <p className="max-w-[350px] font-jost text-xs font-normal md:max-w-[400px] md:text-lg">
            I sketch in silence what the world has never seen,Pixels bloom where there was only dream.A whisper of an
            idea, a fleeting thought,I cradle it gently—bring to life what is not. Blank screens don&apos;t scare me;
            they beg to be told of buttons that beckon and colors that hold. I carve out meaning in every scroll and
            slide, Designing the path where users confide. I speak in structure, fluid, precise, Code is my compass,
            clean and concise. From shadows and shapes, from type and tone, I craft new worlds with lines alone.
          </p>
        </div>

        <div className="flex flex-col gap-10 font-jost md:gap-6">
          <div className={`${CARD} px-3 py-3 md:px-6 md:py-6`}>
            <p className="text-xs text-white">
              I&apos;m a <span className="font-bold text-[#FF99FF]">skilled</span> UI/UX designer and frontend <br />
              developer with a strong focus on delivering
              <br />
              seamless user experiences <br />
              and effective digital solutions
            </p>
            <a
              href={RESUME_URL}
              download
              className="flex items-center justify-center gap-4 rounded-full bg-[#3B353B] px-2 py-3 text-sm font-normal text-white ease-in-out hover:bg-pink-300 hover:text-black"
            >
              <FaArrowDown aria-hidden />
              Download Resume
            </a>
          </div>

          <div className={`${CARD} px-6 py-6`}>
            <h1 className="inline-block bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 bg-clip-text text-xl font-bold text-transparent uppercase">
              Education
            </h1>
            <div className="flex gap-6">
              <p className="text-xs text-[#CCC4CC]">2021-2024</p>
              <div>
                <h1 className="text-lg text-white">
                  Bsc. Information <br />
                  Technology
                </h1>
                <p className="text-xs text-[#CCC4CC]">
                  Ghana Communication
                  <br />
                  Technology University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
