import Link from "next/link";
import type { Project } from "@/data/projects";

export function NextProjectBanner({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{ backgroundImage: `url(${project.bannerImage})` }}
      className="group relative mt-12 ml-auto flex min-h-[30vh] max-w-4xl items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-[#3B353B] opacity-100 transition-opacity duration-300 group-hover:opacity-60 group-active:opacity-60" />
      <div className="relative flex h-full flex-col items-center justify-center space-y-4">
        <span className="w-[200px] rounded-full bg-[#262226] px-4 py-3 text-center text-sm font-medium text-white uppercase">
          Next Project
        </span>
        <h1 className="font-anton text-6xl font-medium text-white uppercase">{project.title}</h1>
      </div>
    </Link>
  );
}
