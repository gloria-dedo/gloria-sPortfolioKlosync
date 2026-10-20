import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { ProjectsHeader } from "@/components/projects/ProjectsHeader";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { ProjectsSkeleton } from "@/components/projects/ProjectsSkeleton";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHeader />
      <section className="bg-[#3B353B] px-4 pt-10 pb-16 font-sans sm:px-6 md:pt-14 md:pb-24 lg:px-8">
        <div className="mx-auto w-full max-w-6xl text-white">
          <Suspense fallback={<ProjectsSkeleton />}>
            <ProjectsList />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  );
}
