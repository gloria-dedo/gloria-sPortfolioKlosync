import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetail } from "@/components/project-detail/ProjectDetail";
import { projects } from "@/data/projects";
import { getNextProject, getProject } from "@/lib/projects";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await getProject((await params).slug);
  return { title: project?.title ?? "Project", description: project?.description };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <ProjectDetail project={project} next={await getNextProject(slug)} />
      <Footer />
    </main>
  );
}
