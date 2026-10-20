import { projects, type CaseStudy, type GalleryItem, type Project } from "@/data/projects";

export type CaseStudyProject = Project & { caseStudy: CaseStudy };

export type GalleryRow = { type: "wide"; item: GalleryItem } | { type: "pair"; items: GalleryItem[] };

export function isCaseStudy(project: Project): project is CaseStudyProject {
  return project.caseStudy !== undefined;
}

/** Single seam for loading projects; swap the body for a CMS/API call later. */
export async function getProjects(): Promise<Project[]> {
  return projects.filter((project) => project.listed);
}

export async function getCaseStudies(): Promise<CaseStudyProject[]> {
  return (await getProjects()).filter(isCaseStudy);
}

export async function getOtherProjects(): Promise<Project[]> {
  return (await getProjects()).filter((project) => !isCaseStudy(project));
}

export async function getProject(slug: string): Promise<Project | undefined> {
  return projects.find((project) => project.slug === slug);
}

export async function getNextProject(slug: string): Promise<Project | undefined> {
  const listed = await getProjects();
  const index = listed.findIndex((project) => project.slug === slug);
  return index === -1 ? undefined : listed[index + 1];
}

/** Up to `count` other listed projects, starting after this one and wrapping around. */
export async function getMoreProjects(slug: string, count: number): Promise<Project[]> {
  const listed = await getProjects();
  const index = listed.findIndex((project) => project.slug === slug);
  const rotated = [...listed.slice(index + 1), ...listed.slice(0, Math.max(index, 0))];
  return rotated.slice(0, count);
}

/** Consecutive "half" tiles are laid out side by side as one row. */
export function groupGallery(gallery: GalleryItem[]): GalleryRow[] {
  return gallery.reduce<GalleryRow[]>((rows, item) => {
    if (item.size === "wide") {
      rows.push({ type: "wide", item });
      return rows;
    }
    const last = rows[rows.length - 1];
    if (last?.type === "pair") last.items.push(item);
    else rows.push({ type: "pair", items: [item] });
    return rows;
  }, []);
}
