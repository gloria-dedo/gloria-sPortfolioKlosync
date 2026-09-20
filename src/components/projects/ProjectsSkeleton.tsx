import { CARD_SHAPE, CARD_STYLES } from "./cardStyles";
import { Skeleton } from "@/components/ui/Skeleton";

type Layout = keyof typeof CARD_STYLES;

function CardSkeleton({ layout }: { layout: Layout }) {
  const styles = CARD_STYLES[layout];
  return (
    <div className={styles.link}>
      <div className={`${CARD_SHAPE} ${styles.card} bg-[#262226]`}>
        <Skeleton className={`w-full rounded-xl ${styles.image}`} />
        <div className={`flex w-full flex-col items-center sm:flex-row sm:items-start sm:justify-around ${styles.row}`}>
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Skeleton className="h-5 w-32 rounded" />
            <Skeleton className="h-4 w-48 rounded" />
          </div>
          <Skeleton className="h-8 w-28 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/** Mirrors the /projects layout: featured, featured, a grid pair, then featured. */
export function ProjectsSkeleton() {
  return (
    <div role="status" aria-label="Loading projects" className="flex flex-col items-center justify-center">
      <CardSkeleton layout="featured" />
      <CardSkeleton layout="featured" />
      <div className="mb-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <CardSkeleton layout="grid" />
        <CardSkeleton layout="grid" />
      </div>
      <CardSkeleton layout="featured" />
    </div>
  );
}
