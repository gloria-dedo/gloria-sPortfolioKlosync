"use client";

import { useMemo, useState } from "react";
import { FiltersDrawer, type FilterGroup } from "./FiltersDrawer";
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

export function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const [view, setView] = useState<View>("all");
  const [industry, setIndustry] = useState("");
  const [service, setService] = useState("");
  const [type, setType] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

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

  const clearFilters = () => {
    setIndustry("");
    setService("");
    setType("");
  };
  const reset = () => {
    setView("all");
    clearFilters();
  };

  const groups: FilterGroup[] = [
    { id: "industry", label: "Industry", options: industries, value: industry, onChange: setIndustry },
    { id: "service", label: "Service", options: services, value: service, onChange: setService },
    { id: "type", label: "Type", options: Object.values(TYPES), value: type, onChange: setType },
  ];

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="flex items-center justify-between gap-3">
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
        <FiltersDrawer
          groups={groups}
          resultCount={visible.length}
          isOpen={filtersOpen}
          onOpenChange={setFiltersOpen}
          onClear={clearFilters}
        />
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
