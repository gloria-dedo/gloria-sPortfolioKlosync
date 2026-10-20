/** Small dark label that opens a section. Sized to its text so it never stretches across small screens. */
export function SectionPill({ children }: { children: string }) {
  return (
    <p className="w-fit rounded-full bg-[#262226] px-5 py-2.5 font-sans text-xs font-semibold tracking-[0.15em] text-white uppercase md:px-6 md:py-3 md:text-sm">
      {children}
    </p>
  );
}
