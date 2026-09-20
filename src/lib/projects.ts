import { projects, type GalleryItem, type Project } from "@/data/projects";

export type ProjectGroup =
  | { type: "featured"; project: Project }
  | { type: "grid"; projects: Project[] };

export type GalleryRow = { type: "wide"; item: GalleryItem } | { type: "pair"; items: GalleryItem[] };

/** Single seam for loading projects; swap the body for a CMS/API call later. */
export async function getProjects(): Promise<Project[]> {
  return projects.filter((project) => project.listed);
}

export async function getProject(slug: string): Promise<Project | undefined> {
  return projects.find((project) => project.slug === slug);
}

export async function getNextProject(slug: string): Promise<Project | undefined> {
  const listed = await getProjects();
  const index = listed.findIndex((project) => project.slug === slug);
  return index === -1 ? undefined : listed[index + 1];
}

/** Consecutive "grid" projects are rendered side by side as one row. */
export function groupProjects(list: Project[]): ProjectGroup[] {
  return list.reduce<ProjectGroup[]>((groups, project) => {
    if (project.layout === "featured") {
      groups.push({ type: "featured", project });
      return groups;
    }
    const last = groups[groups.length - 1];
    if (last?.type === "grid") last.projects.push(project);
    else groups.push({ type: "grid", projects: [project] });
    return groups;
  }, []);
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
