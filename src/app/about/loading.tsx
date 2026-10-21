import { Skeleton } from "@/components/ui/Skeleton";

/** Mirrors the About page: intro beside the portrait, then the story and experience sections. */
export default function Loading() {
  return (
    <main role="status" aria-label="Loading about page" className="min-h-svh bg-[#3B353B]">
      <section className="pt-24 md:pt-32">
        <div className="mx-auto grid w-full max-w-6xl items-end gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr] md:gap-12 md:px-12">
          <div className="flex flex-col gap-6 md:pb-16">
            <Skeleton className="h-14 w-56 rounded-lg md:h-16 md:w-72" />
            {Array.from({ length: 5 }, (_, i) => (
              <Skeleton key={i} className={`h-4 rounded ${i === 4 ? "w-2/3" : "w-full"}`} />
            ))}
          </div>
          <Skeleton className="mx-auto aspect-[4/5] w-full max-w-[280px] rounded-t-2xl rounded-b-none sm:max-w-sm md:mx-0 md:ml-auto" />
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 md:px-12">
          <Skeleton className="h-10 w-48 rounded-full" />
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="flex items-center justify-between gap-4 border-b border-white/10 py-4">
              <div className="flex flex-col gap-2">
                <Skeleton className="h-5 w-52 rounded" />
                <Skeleton className="h-4 w-36 rounded" />
              </div>
              <Skeleton className="h-4 w-28 rounded" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
