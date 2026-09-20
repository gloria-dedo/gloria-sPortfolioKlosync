/** Size and spacing differences between featured (full width) and grid (half width) project cards. */
export const CARD_STYLES = {
  featured: {
    link: "flex w-full flex-col items-center justify-center gap-4 md:gap-10 mb-8",
    card: "w-full min-w-[280px] max-w-[900px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[900px]",
    image: "h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]",
    row: "mt-3 gap-3 sm:mt-5 sm:gap-0",
    title: "text-base sm:text-lg md:text-xl lg:text-2xl",
    tag: "px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm md:text-base",
  },
  grid: {
    link: "flex w-full flex-col items-center justify-center",
    card: "w-full",
    image: "h-[120px] sm:h-[150px] md:h-[200px]",
    row: "mt-3 gap-2 sm:mt-4 sm:gap-0",
    title: "text-sm sm:text-base md:text-lg",
    tag: "px-3 py-1 text-xs sm:px-4 sm:py-2",
  },
} as const;

export const CARD_SHAPE =
  "flex flex-col items-center justify-center overflow-hidden rounded-2xl px-4 py-4 sm:rounded-3xl sm:px-6 sm:py-6 lg:rounded-4xl";
