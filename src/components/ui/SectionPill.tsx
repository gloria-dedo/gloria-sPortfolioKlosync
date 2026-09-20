export function SectionPill({ children, widthClass }: { children: string; widthClass: string }) {
  return (
    <p className={`w-full rounded-full bg-[#262226] p-2 text-center text-xs font-medium text-white md:p-4 md:text-lg ${widthClass}`}>
      {children}
    </p>
  );
}
