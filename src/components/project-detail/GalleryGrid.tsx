import { SkeletonImage } from "@/components/ui/SkeletonImage";
import type { GalleryItem } from "@/data/projects";
import { groupGallery } from "@/lib/projects";

const TILE = "flex w-full items-center justify-center overflow-hidden rounded-2xl min-h-40 p-2 sm:p-3 md:rounded-3xl";
const IMAGE = "block h-auto w-full";

function Tile({ item, className = "", alt }: { item: GalleryItem; className?: string; alt: string }) {
  return (
    <SkeletonImage
      src={item.src}
      alt={alt}
      wrapperClassName={`${TILE} ${item.bg} ${className}`}
      className={item.imgClass ?? IMAGE}
    />
  );
}

export function GalleryGrid({ gallery, name }: { gallery: GalleryItem[]; name: string }) {
  const alt = `${name} project screen`;

  return (
    <>
      {groupGallery(gallery).map((row, i) =>
        row.type === "wide" ? (
          <Tile key={i} item={row.item} alt={alt} />
        ) : (
          <div key={i} className="grid gap-6 sm:grid-cols-2">
            {row.items.map((item) => (
              <Tile key={item.src} item={item} alt={alt} className="sm:aspect-square" />
            ))}
          </div>
        ),
      )}
    </>
  );
}
