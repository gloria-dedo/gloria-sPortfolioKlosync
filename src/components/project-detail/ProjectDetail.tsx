import { GalleryGrid } from "./GalleryGrid";
import { NextProjectBanner } from "./NextProjectBanner";
import { LinkButton } from "@/components/ui/LinkButton";
import type { Project } from "@/data/projects";

type ProjectDetailProps = { project: Project; next?: Project };

export function ProjectDetail({ project, next }: ProjectDetailProps) {
  return (
    <section className="bg-[#3B353B] pt-24 pb-16 font-sans md:pt-32 md:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 md:space-y-14">
          <div className="flex items-center gap-4 md:gap-6">
            <p className="text-xs leading-none font-medium whitespace-nowrap text-[#FF99FF] md:text-lg">
              {project.category}
            </p>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:gap-8">
              <h1 className="flex-shrink-0 font-display text-3xl font-bold tracking-tight text-white uppercase md:text-4xl lg:text-6xl">
                {project.heading}
              </h1>
              <p className="max-w-[450px] text-sm leading-relaxed font-light text-white/80 md:text-base lg:text-lg">
                {project.description}
              </p>
            </div>
          </div>

          <GalleryGrid gallery={project.gallery ?? []} name={project.title} />

          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <LinkButton href="/projects" direction="left" size="lg">
              Back to my projects
            </LinkButton>
            {project.visitUrl && (
              <LinkButton href={project.visitUrl} size="lg">
                Visit the site
              </LinkButton>
            )}
          </div>

          {next && <NextProjectBanner project={next} />}
        </div>
      </div>
    </section>
  );
}
