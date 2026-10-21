import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { SkeletonImage } from "@/components/ui/SkeletonImage";

export type CarouselItem = {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  cardBg: string;
  /** Image has its own background: show it whole, with no frame colour or padding */
  fill?: boolean;
};

/** Frame colour for the active slide; images that carry their own background get none. */
export const frameTone = (item: CarouselItem) => (item.fill ? "" : `ring-1 ring-white/10 ${item.cardBg}`);

/** Vertical section label pinned to the left edge of the screen, level with the top of the frame. */
export function SideLabel({ children }: { children: string }) {
  return (
    <span
      aria-hidden
      className="absolute top-2 left-3 hidden rotate-180 font-sans text-xs font-medium tracking-[0.35em] text-white/70 uppercase [writing-mode:vertical-rl] md:block lg:left-5"
    >
      {children}
    </span>
  );
}

/** Section label on small screens, where the vertical side label is hidden; styled to match it. */
export function MobileHeading({ children }: { children: string }) {
  return (
    <h2 className="mb-4 font-sans text-xs font-medium tracking-[0.35em] text-white/70 uppercase md:sr-only">{children}</h2>
  );
}

type ArrowButtonProps = { direction: "prev" | "next"; label: string; onClick: () => void; className?: string };

/** Desktop arrows sit in the gutters beside the frame; on phones they move into a row below it. */
export const DESKTOP_ARROW = "absolute top-1/2 z-10 hidden -translate-y-1/2 md:flex";

export function ArrowButton({ direction, label, onClick, className = "" }: ArrowButtonProps) {
  const Arrow = direction === "prev" ? FaArrowLeftLong : FaArrowRightLong;
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-sm text-black shadow-lg transition-colors hover:bg-gray-200 md:h-14 md:w-14 md:text-lg ${className || "flex"}`}
    >
      <Arrow />
    </button>
  );
}

/** All slides stacked in the frame and cross-faded, so switching never waits for an image to load. */
export function CarouselSlides({ items, index, inset }: { items: CarouselItem[]; index: number; inset: string }) {
  return items.map((item, i) => (
    <SkeletonImage
      key={item.slug}
      src={item.image}
      alt={i === index ? `${item.title} preview` : ""}
      priority={i === 0}
      wrapperClassName={`absolute ${item.fill ? "inset-0" : inset} transition-opacity duration-700 ${i === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
      className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.02] ${item.fill ? "object-cover" : "object-contain"}`}
    />
  ));
}
