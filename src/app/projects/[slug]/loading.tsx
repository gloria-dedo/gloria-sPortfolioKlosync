import { Skeleton } from "@/components/ui/Skeleton";

/** Mirrors a case study / project page: a sidebar of details beside large image frames. */
export default function Loading() {
  return (
    <main role="status" aria-label="Loading project" className="min-h-svh bg-[#3B353B] pt-24 pb-16 md:pt-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-0 lg:px-10 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
        <div className="flex flex-col gap-8 lg:border-r lg:border-white/10 lg:pr-10 xl:pr-14">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-14 w-4/5 rounded-lg md:h-16" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-2/3 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-white/10 py-6">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-3 w-14 rounded" />
                <Skeleton className="h-4 w-24 rounded" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-5 w-44 rounded" />
            {Array.from({ length: 5 }, (_, i) => (
              <Skeleton key={i} className={`h-3.5 rounded ${i === 4 ? "w-1/2" : "w-full"}`} />
            ))}
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-12 w-48 rounded-full" />
            <Skeleton className="h-12 w-36 rounded-full" />
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-12 lg:pl-10 xl:pl-14">
          <Skeleton className="aspect-[16/10] w-full rounded-2xl md:rounded-3xl" />
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col gap-3">
              <Skeleton className="h-6 w-40 rounded" />
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-4/5 rounded" />
            </div>
            <div className="flex flex-col gap-3">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="grid grid-cols-[120px_1fr] items-center gap-4 sm:grid-cols-[140px_1fr]">
                  <Skeleton className="h-24 rounded-xl sm:h-28" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-3.5 w-full rounded" />
                    <Skeleton className="h-3.5 w-3/4 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Skeleton className="aspect-[16/10] w-full rounded-2xl md:rounded-3xl" />
        </div>
      </div>
    </main>
  );
}
