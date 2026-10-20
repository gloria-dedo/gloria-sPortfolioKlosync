import { SectionShell } from "./SectionShell";
import { SectionPill } from "@/components/ui/SectionPill";
import { books } from "@/data/about";

export function LibrarySection() {
  return (
    <SectionShell>
      <SectionPill>Explore My Library</SectionPill>
      <p className="max-w-2xl text-base leading-relaxed font-light md:text-lg">
        Here are some of the books I&apos;m exploring during my leisure time. I&apos;m always open to thoughtful
        recommendations that inspire creativity, design thinking, or personal growth.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5">
        {books.map((book) => (
          <div
            key={book}
            className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl border-2 border-[#A69CA6] bg-[#544D54] p-4 transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-400"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-full w-auto object-contain transition-transform duration-500 ease-in-out hover:scale-95"
              src={book}
              alt="Book cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
