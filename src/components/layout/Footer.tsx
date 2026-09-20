import { LinkButton } from "@/components/ui/LinkButton";
import { MAILTO } from "@/data/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative min-h-screen bg-[url(/images/bubbles.gif)] bg-cover bg-center font-jost"
    >
      <div className="absolute inset-0 z-10 bg-[#360125] mix-blend-multiply" />

      <div className="relative z-20 flex min-h-screen flex-col justify-between">
        <div className="flex flex-1 flex-col justify-center px-8 md:px-16 lg:px-24">
          <div className="mx-auto w-full max-w-6xl text-white">
            <h1 className="mb-8 text-2xl leading-tight font-black uppercase md:mb-12 md:text-5xl lg:text-6xl xl:text-7xl">
              INTERESTED IN WORKING TOGETHER?
            </h1>
            <h4 className="mb-8 text-xl font-light md:mb-12 md:text-2xl">Let&apos;s talk</h4>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
              <div className="lg:max-w-md lg:flex-1">
                <p className="text-base leading-relaxed md:text-lg">
                  I deliver experiences that resonate deeply with you and your audience, creating a timeless impact.
                </p>
              </div>
              <div className="lg:flex-shrink-0">
                <LinkButton href={MAILTO}>Send me an email</LinkButton>
              </div>
            </div>

            <div className="mt-12 flex items-center md:mt-16">
              <div className="mr-3 h-3 w-3 rounded-full bg-[#FF99FF]" />
              <span className="text-sm md:text-base">Available for work</span>
            </div>
          </div>
        </div>

        <div className="bg-pink-300 px-8 py-4 text-black md:px-16 lg:px-24">
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
