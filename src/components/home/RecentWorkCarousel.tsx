"use client";

import Link from "next/link";
import { CAROUSEL_COLUMN } from "./CaseStudyCarousel";
import { ArrowButton, CarouselSlides, DESKTOP_ARROW, frameTone, MobileHeading, SideLabel, type CarouselItem } from "./carouselParts";
import { LinkButton } from "@/components/ui/LinkButton";
import { useCarousel } from "@/hooks/useCarousel";

export function RecentWorkCarousel({ items }: { items: CarouselItem[] }) {
  const { index, next, prev, goTo, regionProps } = useCarousel(items.length);
  const active = items[index];

  return (
    <section className="relative bg-[#262226] bg-[url(/images/CharcoalSmudgeReal.svg)] bg-cover bg-center pt-4 pb-12 md:pt-10 md:pb-20">
      <div className="absolute inset-0 bg-[#262226] opacity-80 mix-blend-multiply" />

      <div className="scroll-reveal relative text-white">
        <div className={`${CAROUSEL_COLUMN} mb-3 flex items-end justify-between gap-4 md:justify-end`}>
          <MobileHeading>RECENT WORK</MobileHeading>
          <p className="flex flex-col items-end leading-none" aria-live="polite">
            <span className="font-anton text-4xl text-transparent [-webkit-text-stroke:1.2px_#ffffff] md:text-7xl md:[-webkit-text-stroke:1.5px_#ffffff]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-1 font-sans text-xs font-medium tracking-[0.2em] text-white/80 uppercase md:text-base md:tracking-normal md:text-white">• {active.title}</span>
          </p>
        </div>

        <div className="relative">
          <SideLabel>Recent Work</SideLabel>
          <div className={CAROUSEL_COLUMN}>
            <div
              {...regionProps}
              role="region"
              aria-roledescription="carousel"
              aria-label="Recent work"
              className="relative focus:outline-none"
            >
              <Link
                href={`/projects/${active.slug}`}
                aria-label={`View ${active.title}`}
                className={`group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl transition-colors duration-700 sm:aspect-[16/9] md:rounded-3xl ${frameTone(active)}`}
              >
                <CarouselSlides items={items} index={index} inset="inset-3 sm:inset-5 md:inset-7" />
              </Link>
              <ArrowButton direction="prev" label="Previous project" onClick={prev} className={`${DESKTOP_ARROW} -left-[72px] lg:-left-20`} />
              <ArrowButton direction="next" label="Next project" onClick={next} className={`${DESKTOP_ARROW} -right-[72px] lg:-right-20`} />
            </div>
          </div>
        </div>

        <div className={`${CAROUSEL_COLUMN} mt-4 flex flex-wrap items-center justify-between gap-4 md:mt-6`}>
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose a project">
            {items.map((item, i) => (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={item.title}
                onClick={() => goTo(i)}
                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
          <div className="flex gap-3 md:hidden">
            <ArrowButton direction="prev" label="Previous project" onClick={prev} />
            <ArrowButton direction="next" label="Next project" onClick={next} />
          </div>
          <LinkButton href="/projects">View all my projects</LinkButton>
        </div>
      </div>
    </section>
  );
}
