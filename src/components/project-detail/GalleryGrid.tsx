import { SkeletonImage } from "@/components/ui/SkeletonImage";
import type { GalleryItem } from "@/data/projects";
import { groupGallery } from "@/lib/projects";

const TILE = "flex items-center justify-center overflow-hidden rounded-xl px-6 py-8 max-w-full md:h-[445px]";
const WIDE_IMAGE = "block h-auto max-w-full md:max-w-lg lg:max-w-xl";

function Tile({ item, className, alt }: { item: GalleryItem; className: string; alt: string }) {
  return (
    <SkeletonImage
      src={item.src}
      alt={alt}
      wrapperClassName={`${TILE} ${item.bg} ${className}`}
      className={item.imgClass ?? WIDE_IMAGE}
    />
  );
}

export function GalleryGrid({ gallery, name }: { gallery: GalleryItem[]; name: string }) {
  const alt = `${name} project screen`;

  return (
    <>
      {groupGallery(gallery).map((row, i) =>
        row.type === "wide" ? (
          <Tile key={i} item={row.item} alt={alt} className="ml-auto w-full md:w-[934px]" />
        ) : (
          <div key={i} className="flex flex-col gap-6 lg:flex-row">
            {row.items.map((item, j) => (
              <Tile key={item.src} item={item} alt={alt} className={`w-full lg:w-[459px] ${j === 0 ? "ml-auto" : ""}`} />
            ))}
          </div>
        ),
      )}
    </>
  );
}
