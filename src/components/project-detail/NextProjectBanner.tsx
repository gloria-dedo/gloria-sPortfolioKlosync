import Link from "next/link";
import type { Project } from "@/data/projects";

export function NextProjectBanner({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{ backgroundImage: `url(${project.bannerImage})` }}
      className="group relative mt-12 flex min-h-[30vh] items-center justify-center overflow-hidden rounded-2xl bg-cover bg-center md:rounded-3xl"
    >
      <div className="absolute inset-0 bg-[#3B353B] opacity-100 transition-opacity duration-300 group-hover:opacity-60 group-active:opacity-60" />
      <div className="relative flex h-full flex-col items-center justify-center space-y-4">
        <span className="w-[180px] rounded-full bg-[#262226] px-4 py-3 text-center text-sm font-medium text-white uppercase">
          Next Project
        </span>
        <p className="px-4 text-center font-anton text-[clamp(2.5rem,8vw,4rem)] leading-none text-white uppercase">{project.title}</p>
      </div>
    </Link>
  );
}
