import { SectionShell } from "./SectionShell";
import { SectionPill } from "@/components/ui/SectionPill";
import { principles } from "@/data/about";

export function PrinciplesSection() {
  return (
    <SectionShell>
      <SectionPill>My Core Principles</SectionPill>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map(({ title, text }) => (
          <div
            key={title}
            className="group flex flex-col gap-4 rounded-3xl border border-pink-300 from-pink-300 via-purple-400 to-purple-500 p-6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-gradient-to-b md:p-8"
          >
            <h3 className="font-display text-2xl font-bold tracking-tight text-pink-400 group-hover:text-black md:text-3xl">
              {title}
            </h3>
            <p className="text-sm leading-relaxed font-light text-white md:text-base">{text}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
