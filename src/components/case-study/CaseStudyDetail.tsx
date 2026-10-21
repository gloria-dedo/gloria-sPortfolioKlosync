import { CaseStudyFrame, CaseStudyImages } from "./CaseStudyImages";
import { LinkButton } from "@/components/ui/LinkButton";
import type { CaseStudySection } from "@/data/projects";
import type { CaseStudyProject } from "@/lib/projects";

const SECTION_TITLE = "font-display text-xl font-bold tracking-tight text-white md:text-2xl";
const BODY = "font-sans text-sm leading-relaxed font-light text-white/75 md:text-base";

function Sidebar({ project }: { project: CaseStudyProject }) {
  const { caseStudy } = project;
  const prototypeUrl = caseStudy.prototypeUrl ?? project.visitUrl;

  return (
    <aside className="lg:border-r lg:border-white/10 lg:pr-10 xl:pr-14">
      <div className="flex flex-col gap-8 lg:sticky lg:top-28">
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full border border-[#FF99FF] px-3 py-1 font-sans text-xs text-[#FF99FF]">
            {project.tag}
          </span>
          <h1 className="font-anton text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.95] text-white uppercase">
            {project.heading}
          </h1>
          <p className={BODY}>{caseStudy.tagline}</p>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-white/10 py-6">
          {caseStudy.meta.map(({ label, value }) => (
            <div key={label}>
              <dt className="font-sans text-[11px] font-semibold tracking-[2px] text-[#FF99FF] uppercase">{label}</dt>
              <dd className="mt-1 font-sans text-sm text-white">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-3">
          <h2 className="font-sans text-base font-semibold text-white md:text-lg">Concept and Objectives</h2>
          <p className={BODY}>{caseStudy.overview}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {prototypeUrl && <LinkButton href={prototypeUrl}>View interactive prototype</LinkButton>}
          <LinkButton href="/projects" direction="left">
            All projects
          </LinkButton>
        </div>
      </div>
    </aside>
  );
}

function Highlights({ items }: { items: NonNullable<CaseStudySection["highlights"]> }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map(({ label, text }) => (
        <li key={label} className="grid grid-cols-[120px_1fr] items-stretch gap-4 sm:grid-cols-[140px_1fr]">
          <span className="flex min-h-24 items-center justify-center rounded-xl border border-[#A69CA6] bg-[#544D54] p-2 text-center font-sans text-sm font-semibold break-words text-[#FF99FF] sm:min-h-28">
            {label}
          </span>
          <p className="self-center font-sans text-sm leading-relaxed text-white/75">{text}</p>
        </li>
      ))}
    </ul>
  );
}

const CELL_SYMBOLS: Record<string, { mark: string; label: string; tone: string }> = {
  yes: { mark: "✓", label: "Yes", tone: "text-[#FF99FF]" },
  partial: { mark: "◐", label: "Partly", tone: "text-white/60" },
  no: { mark: "—", label: "No", tone: "text-white/30" },
};

/** Feature comparison; the first value column is this project and is highlighted. */
function ComparisonTable({ table }: { table: NonNullable<CaseStudySection["table"]> }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 [scrollbar-width:thin]">
      <table className="w-full min-w-[640px] border-collapse font-sans text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-4 py-3 text-left font-semibold text-white/60">Capability</th>
            {table.columns.map((column, i) => (
              <th key={column} className={`px-3 py-3 text-center font-semibold ${i === 0 ? "bg-[#FF99FF]/10 text-[#FF99FF]" : "text-white/80"}`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map(({ label, values }) => (
            <tr key={label} className="border-b border-white/5 last:border-0">
              <td className="px-4 py-3 text-white/85">{label}</td>
              {values.map((value, i) => {
                const symbol = CELL_SYMBOLS[value];
                return (
                  <td key={i} className={`px-3 py-3 text-center ${i === 0 ? "bg-[#FF99FF]/10" : ""}`}>
                    {symbol ? (
                      <span className={`text-base font-semibold ${symbol.tone}`} aria-label={symbol.label} title={symbol.label}>
                        {symbol.mark}
                      </span>
                    ) : (
                      <span className="text-white/70">{value}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-white/10 px-4 py-3 font-sans text-xs text-white/50">✓ Yes · ◐ Partly · — No</p>
    </div>
  );
}

function Section({ section, frameBg }: { section: CaseStudySection; frameBg: string }) {
  const intro = (section.title || section.body) && (
    <div className="flex flex-col gap-3">
      {section.title && <h2 className={SECTION_TITLE}>{section.title}</h2>}
      {section.body && <p className={BODY}>{section.body}</p>}
    </div>
  );

  return (
    <section className="scroll-reveal flex flex-col gap-6 md:gap-8">
      {section.highlights ? (
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {intro}
          <Highlights items={section.highlights} />
        </div>
      ) : (
        intro
      )}

      {section.list && (
        <ol className="grid gap-x-10 gap-y-4 md:grid-cols-2">
          {section.list.map((item, i) => (
            <li key={item} className="flex gap-4 border-t border-white/10 pt-4">
              <span className="font-anton text-2xl leading-none text-[#FF99FF]">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-sans text-sm leading-relaxed text-white/85 md:text-base">{item}</p>
            </li>
          ))}
        </ol>
      )}

      {section.table && <ComparisonTable table={section.table} />}

      {section.columns && (
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {section.columns.map(({ title, body }) => (
            <div key={title} className="flex flex-col gap-3">
              <h3 className="font-sans text-base font-semibold text-[#FF99FF] md:text-lg">{title}</h3>
              <p className={BODY}>{body}</p>
            </div>
          ))}
        </div>
      )}

      {section.images && <CaseStudyImages images={section.images} frameBg={frameBg} />}
    </section>
  );
}

export function CaseStudyDetail({ project }: { project: CaseStudyProject }) {
  const { caseStudy } = project;

  return (
    <section className="bg-[#3B353B] pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-0 lg:px-10 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
        <Sidebar project={project} />

        <div className="flex min-w-0 flex-col gap-12 md:gap-16 lg:pl-10 xl:pl-14">
          <CaseStudyFrame
            image={{ src: caseStudy.cover, alt: `${project.title} overview`, bg: caseStudy.coverBg, fill: caseStudy.coverFill }}
            frameBg={caseStudy.frameBg}
            priority
          />
          {caseStudy.sections.map((section, i) => (
            <Section key={section.title ?? i} section={section} frameBg={caseStudy.frameBg} />
          ))}
        </div>
      </div>
    </section>
  );
}
