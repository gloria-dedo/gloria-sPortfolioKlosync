import { CARD_FRAME } from "./ProjectCard";
import { PROJECT_GRID } from "./grid";
import { Skeleton } from "@/components/ui/Skeleton";

function CardSkeleton() {
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <Skeleton className={CARD_FRAME} />
      <div className="flex items-start justify-between gap-4 px-1">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-28 rounded" />
          <Skeleton className="h-4 w-44 rounded" />
        </div>
        <Skeleton className="h-9 w-24 rounded-xl" />
      </div>
    </div>
  );
}

/** Mirrors the /projects filters and grid while they load. */
export function ProjectsSkeleton() {
  return (
    <div role="status" aria-label="Loading projects" className="flex flex-col gap-8 md:gap-12">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <Skeleton className="h-11 w-60 rounded-xl" />
        <Skeleton className="h-11 w-64 rounded-xl" />
      </div>
      <div className={PROJECT_GRID}>
        {Array.from({ length: 4 }, (_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
