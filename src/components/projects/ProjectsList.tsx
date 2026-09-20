import { ProjectCard } from "./ProjectCard";
import { getProjects, groupProjects } from "@/lib/projects";

export async function ProjectsList() {
  const groups = groupProjects(await getProjects());

  return (
    <div className="flex flex-col items-center justify-center">
      {groups.map((group) =>
        group.type === "featured" ? (
          <ProjectCard key={group.project.slug} project={group.project} />
        ) : (
          <div key={group.projects[0].slug} className="mb-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {group.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ),
      )}
    </div>
  );
}
