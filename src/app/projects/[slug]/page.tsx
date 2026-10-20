import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/case-study/CaseStudyDetail";
import { Marquee } from "@/components/case-study/Marquee";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetail } from "@/components/project-detail/ProjectDetail";
import { projects } from "@/data/projects";
import { getMoreProjects, getNextProject, getProject, isCaseStudy } from "@/lib/projects";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await getProject((await params).slug);
  if (!project) return { title: "Project" };
  return {
    title: project.caseStudy ? `${project.title} Case Study` : project.title,
    description: project.caseStudy?.tagline ?? project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  if (isCaseStudy(project)) {
    return (
      <main>
        <CaseStudyDetail project={project} />
        <Marquee />
        <MoreProjects projects={await getMoreProjects(slug, 2)} />
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <ProjectDetail project={project} next={await getNextProject(slug)} />
      <Footer />
    </main>
  );
}
