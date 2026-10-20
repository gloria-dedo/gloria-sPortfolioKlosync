"use client";

import Link from "next/link";
import { ArrowButton, CarouselSlides, DESKTOP_ARROW, MobileHeading, SideLabel, type CarouselItem } from "./carouselParts";
import { LinkButton } from "@/components/ui/LinkButton";
import { useCarousel } from "@/hooks/useCarousel";

/** Content column shared by the frame and the caption, leaving room for the arrows at the screen edges. */
export const CAROUSEL_COLUMN = "mx-auto w-full max-w-6xl px-4 md:px-24 lg:px-28 xl:max-w-7xl";

export function CaseStudyCarousel({ items }: { items: CarouselItem[] }) {
  const { index, next, prev, regionProps } = useCarousel(items.length);
  const active = items[index];

  return (
    <section className="relative bg-[#262226] bg-[url(/images/CharcoalSmudgeReal.svg)] bg-cover bg-center py-14 md:py-20">
      <div className="absolute inset-0 bg-[#262226] opacity-80 mix-blend-multiply" />

      <div className="scroll-reveal relative text-white">
        <div className={CAROUSEL_COLUMN}>
          <MobileHeading>CASE STUDIES</MobileHeading>
        </div>

        <div
          {...regionProps}
          role="region"
          aria-roledescription="carousel"
          aria-label="Case studies"
          className="relative focus:outline-none"
        >
          <SideLabel>Case Studies</SideLabel>
          <div className={CAROUSEL_COLUMN}>
            <Link
              href={`/projects/${active.slug}`}
              aria-label={`Read the ${active.title} case study`}
              className={`group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 transition-colors duration-700 sm:aspect-[16/9] md:rounded-3xl ${active.cardBg}`}
            >
              <CarouselSlides items={items} index={index} inset="inset-3 sm:inset-5 md:inset-7" />
            </Link>
          </div>
          <ArrowButton direction="prev" label="Previous case study" onClick={prev} className={`${DESKTOP_ARROW} left-6 lg:left-8`} />
          <ArrowButton direction="next" label="Next case study" onClick={next} className={`${DESKTOP_ARROW} right-6 lg:right-8`} />
        </div>

        <div className={`${CAROUSEL_COLUMN} mt-4 flex justify-end gap-3 md:hidden`}>
          <ArrowButton direction="prev" label="Previous case study" onClick={prev} />
          <ArrowButton direction="next" label="Next case study" onClick={next} />
        </div>

        <div className={`${CAROUSEL_COLUMN} mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:mt-6`}>
          <div className="min-w-0">
            <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{active.title}</h3>
            <p className="mt-1 font-sans text-sm font-light text-white/65 md:text-lg">{active.subtitle}</p>
          </div>
          <div className="flex shrink-0">
            <LinkButton href={`/projects/${active.slug}`}>View case study</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
