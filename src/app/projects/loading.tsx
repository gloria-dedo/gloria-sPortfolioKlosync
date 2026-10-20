import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import { ProjectsSkeleton } from "@/components/projects/ProjectsSkeleton";

export default function Loading() {
  return (
    <main>
      <ProjectsHeader />
      <section className="bg-[#3B353B] px-4 pt-10 pb-16 sm:px-6 md:pt-14 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <ProjectsSkeleton />
        </div>
      </section>
    </main>
  );
}
