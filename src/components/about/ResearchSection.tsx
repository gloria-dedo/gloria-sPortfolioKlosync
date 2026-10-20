import { SectionShell } from "./SectionShell";
import { SectionPill } from "@/components/ui/SectionPill";
import { researchInterests } from "@/data/about";

export function ResearchSection() {
  return (
    <SectionShell>
      <SectionPill>My Research Interests</SectionPill>
      <ul className="flex w-full flex-col gap-4 md:gap-6">
        {researchInterests.map((interest) => (
          <li key={interest} className="flex items-start gap-3 md:justify-end md:gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mt-1.5 w-4 shrink-0 md:order-2 md:mt-2 md:w-6" src="/images/notation.svg" alt="" />
            <p className="text-lg leading-snug font-light md:order-1 md:text-right md:text-2xl">{interest}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
