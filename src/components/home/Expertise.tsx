"use client";

import { UiSkillGrid } from "./UiSkillGrid";
import { WebDevPanel } from "./WebDevPanel";
import { expertiseTabs, type ExpertiseTabId } from "@/data/expertise";
import { useTabs } from "@/hooks/useTabs";

export function Expertise() {
  const { active, setActive, isActive } = useTabs<ExpertiseTabId>("design");

  return (
    <section className="scroll-reveal relative bg-[url(/images/CharcoalSmudgeReal.svg)] bg-cover bg-center">
      <div className="absolute inset-0 z-10 bg-[#262226] opacity-80 mix-blend-multiply" />
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-white sm:px-6 md:px-8 lg:px-12">
        <div className="mt-16 flex w-full max-w-6xl flex-shrink-0 flex-col gap-1 text-start sm:mt-24 sm:gap-8 md:mt-[200px] md:gap-10 lg:mt-[250px]">
          <h1 className="text-left font-jost text-lg font-bold tracking-[3px] text-[#FF99FF] sm:text-xl sm:tracking-[4px] md:text-2xl md:tracking-[5px]">
            MY EXPERTISE
          </h1>

          <div className="flex flex-col border-b border-gray-600 py-20 pb-0 sm:flex-row sm:space-x-6 md:space-x-12">
            {expertiseTabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                className={`mb-2 cursor-pointer border-b-2 pb-3 text-xs font-semibold transition-all duration-300 hover:text-pink-300 sm:mb-0 sm:pb-4 sm:text-sm ${
                  isActive(id) ? "border-pink-400 text-pink-400" : "border-transparent text-gray-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">{active === "design" ? <UiSkillGrid /> : <WebDevPanel />}</div>
        </div>
      </div>
    </section>
  );
}
