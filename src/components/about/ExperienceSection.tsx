import { SectionShell } from "./SectionShell";
import { SectionPill } from "@/components/ui/SectionPill";
import { experience } from "@/data/about";

export function ExperienceSection() {
  return (
    <SectionShell centered={false}>
      <div className="w-full max-w-4xl space-y-7 px-4 font-jost md:px-12">
        <SectionPill widthClass="md:w-[200px]">MY EXPERIENCE</SectionPill>
        <div className="mx-auto w-full max-w-6xl">
          {experience.map(({ role, company, period }) => (
            <div
              key={`${role}-${company}`}
              className="flex cursor-pointer flex-col items-start justify-between border-b border-[#A69CA6] px-1 py-2 transition delay-150 duration-700 ease-in-out hover:bg-[#262226] md:flex-row md:items-center md:px-2 md:py-4"
            >
              <div className="flex flex-col text-xs font-normal text-[#CCC4CC]">
                <p className="text-xs font-medium text-[#FF99FF] md:text-lg">{role}</p>
                <p className="text-xs font-normal text-[#CCC4CC] md:text-sm">{company}</p>
              </div>
              <p className="mt-1 text-xs font-normal text-[#CCC4CC] md:mt-0 md:text-sm">{period}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
