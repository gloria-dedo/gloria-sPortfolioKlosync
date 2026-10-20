"use client";

import { UiSkillGrid } from "./UiSkillGrid";
import { WebDevPanel } from "./WebDevPanel";
import { expertiseTabs, type ExpertiseTabId } from "@/data/expertise";
import { useTabs } from "@/hooks/useTabs";

export function Expertise() {
  const { active, setActive, isActive } = useTabs<ExpertiseTabId>("design");

  return (
    <section className="relative bg-[#262226] bg-[url(/images/CharcoalSmudgeReal.svg)] bg-cover bg-center">
      <div className="absolute inset-0 z-10 bg-[#262226] opacity-80 mix-blend-multiply" />
      <div className="scroll-reveal relative z-20 flex flex-col items-center px-4 py-16 text-white sm:px-6 md:px-8 md:py-24 lg:px-12">
        <div className="flex w-full max-w-6xl flex-col gap-8 text-start md:gap-10">
          <h2 className="text-left font-sans text-lg font-bold tracking-[3px] text-[#FF99FF] sm:text-xl sm:tracking-[4px] md:text-2xl md:tracking-[5px]">
            MY EXPERTISE
          </h2>

          <div className="flex gap-6 overflow-x-auto border-b border-gray-600 [scrollbar-width:none] md:gap-12" role="tablist">
            {expertiseTabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive(id)}
                onClick={() => setActive(id)}
                className={`-mb-px shrink-0 cursor-pointer border-b-2 pb-3 text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:text-pink-300 sm:pb-4 md:text-base ${
                  isActive(id) ? "border-pink-400 text-pink-400" : "border-transparent text-gray-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="md:min-h-[400px]">{active === "design" ? <UiSkillGrid /> : <WebDevPanel />}</div>
        </div>
      </div>
    </section>
  );
}
