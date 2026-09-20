import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { ContactCard } from "@/components/about/ContactCard";
import { ExperienceSection } from "@/components/about/ExperienceSection";
import { FaqSection } from "@/components/about/FaqSection";
import { LibrarySection } from "@/components/about/LibrarySection";
import { ListeningSection } from "@/components/about/ListeningSection";
import { PrinciplesSection } from "@/components/about/PrinciplesSection";
import { QuoteSection } from "@/components/about/QuoteSection";
import { ResearchSection } from "@/components/about/ResearchSection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = { title: "About Me" };

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <ExperienceSection />
      <ResearchSection />
      <LibrarySection />
      <QuoteSection />
      <PrinciplesSection />
      <FaqSection />
      <ContactCard />
      <ListeningSection />
      <Footer />
    </main>
  );
}
