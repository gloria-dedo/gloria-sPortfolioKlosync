import { SectionShell } from "./SectionShell";
import { SectionPill } from "@/components/ui/SectionPill";
import { researchInterests } from "@/data/about";

export function ResearchSection() {
  return (
    <SectionShell>
      <div className="w-full max-w-6xl space-y-8 px-4 font-jost md:px-12">
        <SectionPill widthClass="md:w-[300px]">MY RESEARCH INTERESTS</SectionPill>
        <div className="w-full space-y-4 md:space-y-8">
          {researchInterests.map((interest) => (
            <div key={interest} className="flex w-full items-center justify-start gap-4 md:justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-[15px] md:order-2 md:w-[30px]" src="/images/notation.svg" alt="" />
              <p className="text-left text-lg font-light text-white md:order-1 md:text-right md:text-2xl">{interest}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
