"use client";

import { SectionShell } from "./SectionShell";
import { faqs } from "@/data/about";
import { useAccordion } from "@/hooks/useAccordion";

export function FaqSection() {
  const { isOpen, toggle } = useAccordion();

  return (
    <SectionShell>
      <div className="w-full max-w-6xl space-y-8 px-4 py-10 font-jost md:px-12">
        <div className="flex flex-col gap-6 md:flex-row">
          <h1 className="inline-block bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 bg-clip-text font-jost text-2xl leading-none font-bold tracking-tight text-transparent md:w-full md:text-6xl">
            FAQs
          </h1>
          <div className="flex flex-col gap-6">
            {faqs.map(({ question, answer }, i) => (
              <div
                key={question}
                className="rounded-lg border border-white/50 bg-gradient-to-br from-white/30 to-white/5 shadow-lg backdrop-blur-3xl"
              >
                <button
                  type="button"
                  aria-expanded={isOpen(i)}
                  onClick={() => toggle(i)}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-[#544D54]"
                >
                  <span className="text-sm font-medium text-white md:text-lg">{question}</span>
                  <div />
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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
                    <div className="px-6 pb-4 font-light text-white">{answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
