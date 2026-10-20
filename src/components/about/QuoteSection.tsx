"use client";

import { quotes } from "@/data/about";
import { useQuoteRotator } from "@/hooks/useQuoteRotator";

export function QuoteSection() {
  const { index, progress, visible, goTo, pause, resume } = useQuoteRotator(quotes.length);
  const fade = `transition-all duration-1000 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`;

  return (
    <section
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="relative bg-[#262226] bg-[url(/images/optimized/quotebg.webp)] bg-cover bg-center"
    >
      <div className="absolute inset-0 z-10 bg-[#262226] opacity-90 mix-blend-multiply" />
      <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 py-16 font-rubik md:min-h-[70svh] md:px-12 md:py-24">
        <div className="space-y-6 text-center md:space-y-8">
          <blockquote
            className={`inline-block bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 bg-clip-text text-[clamp(1.5rem,4.5vw,3.5rem)] leading-tight font-bold text-transparent ${fade}`}
          >
            {quotes[index].text}
          </blockquote>
          <cite
            className={`block text-sm font-medium text-gray-300 italic sm:text-base md:text-lg lg:text-xl ${fade}`}
          >
            {quotes[index].author}
          </cite>
        </div>

        <div className="mt-8 flex space-x-2 md:mt-12">
          {quotes.map((quote, i) => (
            <button
              key={quote.text}
              type="button"
              aria-label={`Show quote ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 md:h-3 md:w-3 ${
                i === index ? "bg-pink-300" : "bg-gray-600"
              }`}
            />
          ))}
        </div>

        <div className="mt-4 w-full max-w-[200px] rounded-full md:max-w-sm">
          <div
            style={{ width: `${progress}%` }}
            className="h-1 rounded-full bg-gradient-to-r from-pink-300 to-pink-400 transition-all duration-100 ease-linear"
          />
        </div>
      </div>
    </section>
  );
}
