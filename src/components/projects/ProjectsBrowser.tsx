"use client";

import { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { ProjectCard } from "./ProjectCard";
import { PROJECT_GRID } from "./grid";
import type { Project } from "@/data/projects";

const VIEWS = [
  { id: "all", label: "All" },
  { id: "recent", label: "Recent" },
] as const;

const TYPES = { caseStudy: "Case study", other: "Other projects" } as const;

type View = (typeof VIEWS)[number]["id"];

/** How many projects the "Recent" view shows */
const RECENT_COUNT = 4;

const unique = (values: string[]) => [...new Set(values)].sort();

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="relative">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`cursor-pointer appearance-none rounded-xl py-2.5 pr-10 pl-4 font-sans text-sm font-medium transition-colors focus:ring-2 focus:ring-white/60 focus:outline-none md:text-base ${value ? "bg-white text-[#262226]" : "bg-white/10 text-white hover:bg-white/15"}`}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FaChevronDown
        aria-hidden
        className={`pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-xs ${value ? "text-[#262226]" : "text-white/70"}`}
      />
    </label>
  );
}

export function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const [view, setView] = useState<View>("all");
  const [industry, setIndustry] = useState("");
  const [service, setService] = useState("");
  const [type, setType] = useState("");

  const industries = useMemo(() => unique(projects.map((project) => project.tag)), [projects]);
  const services = useMemo(() => unique(projects.map((project) => project.category)), [projects]);

  const visible = useMemo(() => {
    let list = projects.filter(
      (project) =>
        (!industry || project.tag === industry) &&
        (!service || project.category === service) &&
        (!type || (type === TYPES.caseStudy) === Boolean(project.caseStudy)),
    );
    if (view === "recent") list = [...list].sort((a, b) => b.date.localeCompare(a.date)).slice(0, RECENT_COUNT);
    return list;
  }, [projects, view, industry, service, type]);

  const reset = () => {
    setView("all");
    setIndustry("");
    setService("");
    setType("");
  };

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-1" role="tablist" aria-label="Show projects">
          {VIEWS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={view === id}
              onClick={() => setView(id)}
              className={`cursor-pointer rounded-xl px-4 py-2.5 font-sans text-sm font-medium transition-colors md:text-base ${view === id ? "bg-white/10 text-white" : "text-white/55 hover:text-white"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <FilterSelect label="Industry" value={industry} options={industries} onChange={setIndustry} />
          <FilterSelect label="Service" value={service} options={services} onChange={setService} />
          <FilterSelect label="Type" value={type} options={Object.values(TYPES)} onChange={setType} />
        </div>
      </div>

      {visible.length > 0 ? (
        <div className={PROJECT_GRID}>
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i < 2} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 px-6 py-20 text-center">
          <p className="font-display text-xl font-semibold text-white">No projects match these filters</p>
          <button
            type="button"
            onClick={reset}
            className="cursor-pointer rounded-xl bg-white/10 px-4 py-2.5 font-sans text-sm font-medium text-white hover:bg-white/15"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
