import { CaseStudyVideo } from "@/components/case-study/CaseStudyVideo";
import { SkeletonImage } from "@/components/ui/SkeletonImage";
import type { GalleryItem } from "@/data/projects";
import { groupGallery } from "@/lib/projects";

const TILE = "flex w-full items-center justify-center overflow-hidden rounded-2xl min-h-40 p-2 sm:p-3 md:rounded-3xl";
/** Finished mockups carry their own background, so they sit edge to edge with no frame */
const FILL_TILE = "block w-full overflow-hidden rounded-2xl md:rounded-3xl";
const IMAGE = "block h-auto w-full";

function Tile({ item, className = "", alt }: { item: GalleryItem; className?: string; alt: string }) {
  const wrapper = item.fill ? FILL_TILE : `${TILE} ${item.bg ?? ""} ${className}`;
  if (item.video) {
    return (
      <div className={wrapper}>
        <CaseStudyVideo
          media={{ src: item.src, alt, video: item.video }}
          className={item.fill ? IMAGE : `${IMAGE} rounded-lg md:rounded-xl`}
        />
      </div>
    );
  }
  return <SkeletonImage src={item.src} alt={alt} wrapperClassName={wrapper} className={item.imgClass ?? IMAGE} />;
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
