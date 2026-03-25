import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 p-5 border border-border rounded-lg",
        project.bgColor,
        project.soon && "border-dashed",
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{project.name}</h3>
          {project.soon && (
            <Badge variant="outline" className="border-dashed">
              Soon
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {project.description}
        </p>
      </div>
      <div className="mt-auto pt-3 flex justify-end">
        <Button asChild variant="outline">
          <a href={project.repo} target="_blank" rel="noreferrer">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            Star on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}
