import { SectionShell } from "./SectionShell";
import { SectionPill } from "@/components/ui/SectionPill";
import { principles } from "@/data/about";

export function PrinciplesSection() {
  return (
    <SectionShell>
      <div className="w-full max-w-6xl space-y-8 px-4 py-10 font-jost md:px-12">
        <SectionPill widthClass="md:w-[300px]">MY CORE PRINCIPLES</SectionPill>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {principles.map(({ title, text }) => (
            <div
              key={title}
              className="group flex min-h-[100px] max-w-[300px] cursor-pointer flex-col items-start justify-between rounded-3xl border border-pink-300 bg-transparent p-8 transition delay-150 duration-300 ease-in-out from-pink-300 via-purple-400 to-purple-500 hover:-translate-y-1 hover:bg-gradient-to-b md:min-h-[200px]"
            >
              <h3 className="mb-6 text-3xl text-pink-400 group-hover:text-black">{title}</h3>
              <h3 className="text-xs font-medium text-white md:text-lg">{text}</h3>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
