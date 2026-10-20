import { Skeleton } from "@/components/ui/Skeleton";

/** Shown while a project or case study page loads: a sidebar of text lines beside large image frames. */
export default function Loading() {
  return (
    <main role="status" aria-label="Loading project" className="min-h-svh bg-[#262226] pt-24 pb-20 md:pt-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:px-10">
        <div className="flex flex-col gap-5 lg:pr-10">
          <Skeleton className="h-6 w-28 rounded-full" />
          <Skeleton className="h-16 w-3/4 rounded-lg" />
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-5/6 rounded" />
          <div className="mt-4 grid grid-cols-2 gap-5">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-3 w-16 rounded" />
                <Skeleton className="h-4 w-24 rounded" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:pl-10">
          <Skeleton className="aspect-[16/10] w-full rounded-2xl md:rounded-3xl" />
          <Skeleton className="h-6 w-48 rounded" />
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="aspect-[16/10] w-full rounded-2xl md:rounded-3xl" />
        </div>
      </div>
    </main>
  );
}
