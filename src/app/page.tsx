import { AboutIntro } from "@/components/home/AboutIntro";
import { Expertise } from "@/components/home/Expertise";
import { Hero } from "@/components/home/Hero";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutIntro />
      <Expertise />
      <ProjectShowcase />
      <Footer />
    </main>
  );
}
