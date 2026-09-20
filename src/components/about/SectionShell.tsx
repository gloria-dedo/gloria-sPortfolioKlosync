type SectionShellProps = {
  children: React.ReactNode;
  /** Centre the content horizontally (default) or leave it left-aligned */
  centered?: boolean;
};

/** Full-height dark section used throughout the About page. */
export function SectionShell({ children, centered = true }: SectionShellProps) {
  return (
    <section className={`flex min-h-screen w-full items-center bg-[#3B353B] ${centered ? "justify-center" : ""}`}>
      {children}
    </section>
  );
}
