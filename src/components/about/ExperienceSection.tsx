import { SectionShell } from "./SectionShell";
import { SectionPill } from "@/components/ui/SectionPill";
import { experience } from "@/data/about";

export function ExperienceSection() {
  return (
    <SectionShell>
      <SectionPill>My Experience</SectionPill>
      <ul className="w-full">
        {experience.map(({ role, company, period }) => (
          <li
            key={`${role}-${company}`}
            className="flex flex-col gap-1 border-b border-[#A69CA6]/60 px-1 py-4 transition-colors duration-500 hover:bg-[#262226] sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:px-3 md:py-5"
          >
            <div className="flex flex-col">
              <p className="text-base font-semibold text-[#FF99FF] md:text-lg">{role}</p>
              <p className="text-sm text-[#CCC4CC]">{company}</p>
            </div>
            <p className="shrink-0 text-sm text-[#CCC4CC]">{period}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
