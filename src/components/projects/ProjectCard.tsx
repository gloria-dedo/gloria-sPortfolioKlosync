import Link from "next/link";
import { SkeletonImage } from "@/components/ui/SkeletonImage";
import type { Project } from "@/data/projects";

export const CARD_FRAME = "aspect-[4/3] w-full overflow-hidden rounded-2xl md:rounded-3xl";

/** Framed preview with breathing room around the image, then title, subtitle and industry tag. */
export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex flex-col gap-4 md:gap-5">
      <div
        className={`${CARD_FRAME} transition-all duration-700 ease-in-out ${project.cardFill ? "" : `${project.cardBg} ${project.cardHover} p-5 sm:p-8 lg:p-10`}`}
      >
        <SkeletonImage
          src={project.cardImage}
          alt={project.title}
          priority={priority}
          wrapperClassName="h-full w-full"
          className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${project.cardFill ? "object-cover" : "object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"}`}
        />
      </div>
      <div className="flex items-start justify-between gap-4 px-1">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">{project.title}</h3>
          <p className="mt-0.5 font-sans text-sm font-light text-white/55 md:text-base">{project.subtitle}</p>
        </div>
        <span className="shrink-0 rounded-xl bg-white/10 px-3.5 py-2 font-sans text-sm font-medium whitespace-nowrap text-white md:px-4">
          {project.tag}
        </span>
      </div>
    </Link>
  );
}
