import { SectionShell } from "./SectionShell";
import { AvailableBadge } from "@/components/ui/AvailableBadge";
import { EMAIL, SOCIAL_LINKS } from "@/data/site";

export function ContactCard() {
  return (
    <SectionShell>
      <div className="w-full max-w-6xl space-y-8 px-4 font-jost md:px-12">
        <div className="flex w-full flex-col items-center justify-center gap-8 rounded-lg bg-[#544D54] py-8">
          <p className="text-xl font-medium text-white md:text-4xl">{EMAIL}</p>
          <AvailableBadge />
          <p className="font-fajardose text-3xl text-white md:text-5xl">I am everywhere</p>
          <div className="flex gap-8">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="text-xs text-white italic underline hover:text-pink-300 md:text-2xl">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
