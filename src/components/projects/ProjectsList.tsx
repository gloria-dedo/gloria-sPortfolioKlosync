import { ProjectsBrowser } from "./ProjectsBrowser";
import { getProjects } from "@/lib/projects";

export async function ProjectsList() {
  return <ProjectsBrowser projects={await getProjects()} />;
}
