import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Project {
  name: string;
  description: string;
  repo: string;
  bgColor: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 p-5 border border-border rounded-lg",
        project.bgColor,
      )}
    >
      <div>
        <h3 className="font-semibold">{project.name}</h3>
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
