import { LinkButton } from "@/components/ui/LinkButton";
import { MAILTO } from "@/data/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#360125] bg-[url(/images/optimized/bubbles.webp)] bg-cover bg-center font-sans"
    >
      <div className="absolute inset-0 z-10 bg-[#360125] mix-blend-multiply" />

      <div className="relative z-20 flex flex-col">
        <div className="px-4 py-16 sm:px-8 md:px-16 md:py-24 lg:px-24">
          <div className="mx-auto w-full max-w-6xl text-white">
            <h2 className="mb-8 text-[clamp(2rem,6vw,4.5rem)] leading-tight font-black text-balance uppercase md:mb-12">
              INTERESTED IN WORKING TOGETHER?
            </h2>
            <h4 className="mb-8 text-xl font-light md:mb-12 md:text-2xl">Let&apos;s talk</h4>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
              <div className="lg:max-w-md lg:flex-1">
                <p className="text-base leading-relaxed font-light md:text-lg">
                  I deliver experiences that resonate deeply with you and your audience, creating a timeless impact.
                </p>
              </div>
              <div className="lg:flex-shrink-0">
                <LinkButton href={MAILTO}>Send me an email</LinkButton>
              </div>
            </div>

            <div className="mt-10 flex items-center md:mt-14">
              <div className="mr-3 h-3 w-3 rounded-full bg-[#FF99FF]" />
              <span className="text-sm md:text-base">Available for work</span>
            </div>
          </div>
        </div>

        <div className="bg-pink-300 px-4 py-4 text-black sm:px-8 md:px-16 lg:px-24">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-sm">
              Designed by <span className="font-medium">Moi</span>
            </p>
            <p className="text-sm">
              ©️2025 Developed by <span className="font-medium">Moi</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
