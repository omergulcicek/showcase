import { GithubStarButton } from "@/components/github-star-button";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { Badge } from "./ui/badge";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("Projects");

  return (
    <div
      className={cn(
        "flex flex-col gap-3 p-5 border border-border rounded-lg",
        project.bgColor,
        project.status && "border-dashed",
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{project.name}</h3>
          {project.status && (
            <Badge variant="outline" className="border-dashed">
              {t(`status.${project.status}`)}
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {t(project.descriptionKey)}
        </p>
      </div>
      <div className="mt-auto pt-3 flex justify-end">
        {project.repo && <GithubStarButton href={project.repo} />}
      </div>
    </div>
  );
}
