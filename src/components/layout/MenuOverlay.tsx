import Link from "next/link";
import { LinkButton } from "@/components/ui/LinkButton";
import { AvailableBadge } from "@/components/ui/AvailableBadge";
import { MAILTO, NAV_LINKS } from "@/data/site";

type MenuOverlayProps = { isOpen: boolean; onNavigate: () => void };

export function MenuOverlay({ isOpen, onNavigate }: MenuOverlayProps) {
  const state = isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0";

  return (
    <div className={`fixed inset-0 z-40 bg-[#3B353B] transition-all duration-300 ease-in-out ${state}`}>
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="mx-auto flex w-full max-w-5xl flex-col justify-around gap-8 text-left md:flex-row">
          <div className="mt-8 flex flex-col gap-6 font-jost md:gap-10">
            {NAV_LINKS.map(({ label, href, hover }) => (
              <Link
                key={label}
                href={href}
                onClick={onNavigate}
                className={`block text-lg text-white transition-colors md:text-3xl lg:text-4xl ${hover}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="space-y-6 pt-8">
            <p className="font-rubik text-xl font-normal text-white md:text-2xl">Let&apos;s talk</p>
            <p className="text-xl leading-relaxed font-normal text-white">
              I deliver experiences that resonate
              <br />
              deeply with you and your audience,
              <br />
              creating a timeless impact.
            </p>
            <AvailableBadge />
            <div className="flex w-1/2 md:w-[70%]">
              <LinkButton href={MAILTO}>Send me an email</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
