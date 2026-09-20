import Link from "next/link";
import { CARD_SHAPE, CARD_STYLES } from "./cardStyles";
import { SkeletonImage } from "@/components/ui/SkeletonImage";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const styles = CARD_STYLES[project.layout];

  return (
    <Link href={`/projects/${project.slug}`} className={styles.link}>
      <div
        className={`${CARD_SHAPE} ${styles.card} ${project.cardBg} ${project.cardHover} cursor-pointer transition-all duration-700 ease-in-out`}
      >
        <SkeletonImage
          src={project.cardImage}
          alt={project.title}
          wrapperClassName={`w-full ${styles.image} transition-all duration-800 ease-out hover:scale-90`}
          className="h-full w-full object-contain"
        />
        <div className={`flex w-full flex-col items-center sm:flex-row sm:items-start sm:justify-around ${styles.row}`}>
          <div className="text-center sm:text-left">
            <h4 className={`leading-tight font-medium text-white ${styles.title}`}>
              {project.title}
              <br className="hidden sm:block" />
              <span className="text-sm! font-light sm:hidden"> - </span>
              {project.subtitle}
            </h4>
          </div>
          <div className="flex-shrink-0">
            <span
              className={`rounded-full bg-[#544D54] font-medium whitespace-nowrap text-white ${styles.tag}`}
            >
              {project.tag}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
