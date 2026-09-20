import { GalleryGrid } from "./GalleryGrid";
import { NextProjectBanner } from "./NextProjectBanner";
import { LinkButton } from "@/components/ui/LinkButton";
import type { Project } from "@/data/projects";

type ProjectDetailProps = { project: Project; next?: Project };

export function ProjectDetail({ project, next }: ProjectDetailProps) {
  return (
    <section className="min-h-screen bg-[#3B353B] pt-20 font-jost md:pt-24">
      <div className="mx-auto ml-auto px-4 md:px-22">
        <div className="mb-6 ml-auto max-w-6xl space-y-12 md:mb-16">
          <div className="ml-auto flex max-w-4xl items-center gap-4 md:gap-6">
            <h1 className="text-xs leading-none font-medium whitespace-nowrap text-[#FF99FF] md:text-lg">
              {project.category}
            </h1>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="ml-auto max-w-4xl">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:gap-8 lg:gap-[25px]">
              <h1 className="flex-shrink-0 font-alatsi text-3xl font-medium text-white uppercase md:text-4xl lg:text-6xl">
                {project.heading}
              </h1>
              <p className="max-w-[450px] text-sm leading-relaxed text-white/80 md:text-base lg:text-lg">
                {project.description}
              </p>
            </div>
          </div>

          <GalleryGrid gallery={project.gallery} name={project.title} />

          <div className="ml-auto flex max-w-4xl flex-col justify-between gap-6 md:flex-row">
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
