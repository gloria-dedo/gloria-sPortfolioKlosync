type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
};

/** Dark About-page section with the site's standard vertical rhythm and content width. */
export function SectionShell({ children, className = "" }: SectionShellProps) {
  return (
    <section className={`w-full bg-[#3B353B] py-12 md:py-20 ${className}`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 font-sans text-white sm:px-6 md:gap-10 md:px-12">
        {children}
      </div>
    </section>
  );
}
