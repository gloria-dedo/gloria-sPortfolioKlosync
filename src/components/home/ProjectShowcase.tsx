"use client";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { LinkButton } from "@/components/ui/LinkButton";
import { Skeleton } from "@/components/ui/Skeleton";
import { carouselProjects } from "@/data/projects";
import { useCarousel } from "@/hooks/useCarousel";
import { useImageLoaded } from "@/hooks/useImageLoaded";

const ARROW_BUTTON =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-sm text-black hover:bg-gray-200 sm:h-12 sm:w-12 sm:text-base md:h-14 md:w-14";

export function ProjectShowcase() {
  const { index, next, prev } = useCarousel(carouselProjects.length, 1);
  const { name, image } = carouselProjects[index];
  const { ref, loaded, onLoad, onError } = useImageLoaded(image);

  return (
    <section className="relative min-h-screen bg-[url(/images/CharcoalSmudgeReal.svg)] bg-cover bg-center pt-3 md:pt-12">
      <div className="absolute inset-0 z-10 bg-[#262226] opacity-80 mix-blend-multiply" />
      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 text-white sm:px-6 md:px-8 lg:px-12">
        <div className="mt-2 flex w-full flex-col items-center justify-center space-y-4 md:mt-8">
          <p className="project-carousel-name mt-2 text-left font-alatsi text-3xl font-semibold md:text-6xl">{name}</p>

          <div className="mb-6 flex w-full flex-col items-center justify-center gap-2 sm:mb-8 sm:gap-4 md:flex-row md:gap-6 lg:gap-10">
            <button type="button" aria-label="Previous project" onClick={prev} className={ARROW_BUTTON}>
              <FaArrowLeftLong />
            </button>

            <div className="relative flex h-[150px] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-2xl bg-[#BCCFF3] sm:max-w-[400px] sm:rounded-3xl md:h-[360px] md:max-w-[600px] lg:max-w-[800px] lg:rounded-4xl xl:max-w-[900px]">
              {!loaded && <Skeleton className="absolute inset-0 bg-white/40" />}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={ref}
                src={image}
                alt={name}
                onLoad={onLoad}
                onError={onError}
                className={`w-full max-w-[240px] transition-opacity duration-300 sm:max-w-[350px] md:max-w-[500px] lg:max-w-[600px] ${loaded ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            <button type="button" aria-label="Next project" onClick={next} className={ARROW_BUTTON}>
              <FaArrowRightLong />
            </button>
          </div>

          <div className="mt-4 flex w-full max-w-4xl items-center justify-between px-4 md:mt-14 md:px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/eclipemini.svg" alt="eclipse" className="w-6 flex-shrink-0 sm:w-8" />
            <div className="mt-2 flex flex-1 justify-end sm:mt-4 md:mb-12">
              <LinkButton href="/projects">View all my projects</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
