import { ProjectCard } from "@/components/projects/ProjectCard";
import { LinkButton } from "@/components/ui/LinkButton";
import type { Project } from "@/data/projects";

export function MoreProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-[#3B353B] px-4 py-14 sm:px-6 md:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 font-anton text-[clamp(2.25rem,6vw,4rem)] leading-none text-white uppercase md:mb-12">
          Discover more of my projects
        </h2>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <div className="flex aspect-[4/3] flex-col justify-between gap-6 rounded-2xl border border-[#A69CA6] bg-[#544D54] p-6 md:rounded-3xl">
            <p className="font-sans text-base leading-relaxed font-light text-white/80 md:text-lg">
              These were once just ideas, but the transformative power of design has made them realities.
            </p>
            <div className="flex">
              <LinkButton href="/projects">See all projects</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
