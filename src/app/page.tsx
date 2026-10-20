import { AboutIntro } from "@/components/home/AboutIntro";
import { CaseStudyCarousel } from "@/components/home/CaseStudyCarousel";
import { Expertise } from "@/components/home/Expertise";
import { Hero } from "@/components/home/Hero";
import { RecentWorkCarousel } from "@/components/home/RecentWorkCarousel";
import type { CarouselItem } from "@/components/home/carouselParts";
import { Footer } from "@/components/layout/Footer";
import type { Project } from "@/data/projects";
import { getCaseStudies, getOtherProjects } from "@/lib/projects";

const toItem = ({ slug, title, subtitle, tag, cardBg }: Project, image: string): CarouselItem => ({
  slug,
  title,
  subtitle,
  tag,
  cardBg,
  image,
});

export default async function HomePage() {
  const [caseStudies, others] = await Promise.all([getCaseStudies(), getOtherProjects()]);

  return (
    <main>
      <Hero />
      <AboutIntro />
      <Expertise />
      <CaseStudyCarousel items={caseStudies.map((project) => toItem(project, project.caseStudy.cover))} />
      <RecentWorkCarousel items={others.map((project) => toItem(project, project.cardImage))} />
      <Footer />
    </main>
  );
}
