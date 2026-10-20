"use client";

import { SectionShell } from "./SectionShell";
import { faqs } from "@/data/about";
import { useAccordion } from "@/hooks/useAccordion";

export function FaqSection() {
  const { isOpen, toggle } = useAccordion();

  return (
    <SectionShell>
      <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-10">
          <h2 className="w-fit bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 bg-clip-text font-display text-[clamp(2.25rem,6vw,4rem)] leading-none font-bold tracking-tight text-transparent">
            FAQs
          </h2>
          <div className="flex flex-col gap-4 md:gap-5">
            {faqs.map(({ question, answer }, i) => (
              <div
                key={question}
                className="rounded-lg border border-white/50 bg-gradient-to-br from-white/30 to-white/5 shadow-lg backdrop-blur-3xl"
              >
                <button
                  type="button"
                  aria-expanded={isOpen(i)}
                  onClick={() => toggle(i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-[#544D54] md:px-6"
                >
                  <span className="text-sm font-medium text-white md:text-lg">{question}</span>
                  <svg className="h-6 w-6 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v12"
                      className={`transition-opacity duration-200 ${isOpen(i) ? "opacity-0" : "opacity-100"}`}
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12" />
                  </svg>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen(i) ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-4 text-sm leading-relaxed font-light text-white md:px-6 md:text-base">{answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </SectionShell>
  );
}
