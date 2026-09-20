import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { ProjectsSkeleton } from "@/components/projects/ProjectsSkeleton";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main>
      <section className="flex items-center justify-center bg-[#3B353B] pt-20 font-jost md:pt-24">
        <div className="flex w-full max-w-6xl flex-col text-white md:flex-row">
          <div className="flex w-full items-center justify-center text-center">
            <h4 className="flex flex-col items-center space-y-[-10px] md:space-y-[-40px]">
              <span className="inline-block bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 bg-clip-text text-[50px] font-medium text-transparent uppercase md:text-[150px]">
                Works
              </span>
              <span className="text-xs font-light md:text-xl">Crafting solutions that resonate with you</span>
            </h4>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen flex-col items-center justify-center bg-[#3B353B] px-4 pt-20 font-jost sm:px-6 md:pt-24 lg:px-8">
        <div className="flex w-full max-w-6xl flex-col text-white">
          <Suspense fallback={<ProjectsSkeleton />}>
            <ProjectsList />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}
