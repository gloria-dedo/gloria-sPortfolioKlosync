import { SectionShell } from "./SectionShell";
import { AvailableBadge } from "@/components/ui/AvailableBadge";
import { EMAIL, SOCIAL_LINKS } from "@/data/site";

export function ContactCard() {
  return (
    <SectionShell>
      <div className="flex w-full flex-col items-center gap-6 rounded-2xl bg-[#544D54] px-4 py-10 text-center md:gap-8 md:py-14">
        <a href={`mailto:${EMAIL}`} className="text-lg font-semibold break-all hover:text-pink-300 sm:text-2xl md:text-4xl">
          {EMAIL}
        </a>
        <AvailableBadge />
        <p className="font-fajardose text-4xl md:text-5xl">I am everywhere</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-10">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="text-sm italic underline hover:text-pink-300 md:text-xl">
              {label}
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
