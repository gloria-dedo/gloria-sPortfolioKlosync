import { Skeleton } from "@/components/ui/Skeleton";

/** Home page placeholder: the hero's name, title and button while the page loads. */
export default function Loading() {
  return (
    <main role="status" aria-label="Loading" className="flex min-h-svh flex-col items-center justify-center gap-6 bg-[#262226] px-4">
      <Skeleton className="h-12 w-full max-w-3xl rounded-xl md:h-20" />
      <Skeleton className="h-5 w-full max-w-md rounded" />
      <Skeleton className="mt-4 h-12 w-52 rounded-full" />
    </main>
  );
}
