import { SectionShell } from "./SectionShell";
import { SectionPill } from "@/components/ui/SectionPill";
import { books } from "@/data/about";

export function LibrarySection() {
  return (
    <SectionShell>
      <div className="w-full max-w-6xl space-y-8 px-4 font-jost md:px-12">
        <SectionPill widthClass="md:w-[300px]">EXPLORE MY LIBRARY</SectionPill>
        <p className="text-sm font-light text-white md:text-lg">
          Here are some of the books I&apos;m exploring during my leisure time.
          <br /> I&apos;m always open to thoughtful recommendations that inspire creativity,
          <br /> design thinking, or personal growth
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {books.map((book) => (
            <div
              key={book}
              className="flex max-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-[#A69CA6] bg-[#544D54] transition-all duration-700 ease-in-out hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-400 md:max-w-[250px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-[80px] py-4 transition-all duration-500 ease-in-out hover:scale-90 md:w-[150px]"
                src={book}
                alt="Book cover"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
