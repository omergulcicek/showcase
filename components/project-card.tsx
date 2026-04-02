"use client";

import { GithubStarButton } from "@/components/github-star-button";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { Badge } from "./ui/badge";
import { useTranslations } from "next-intl";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("Projects");
  const tAction = useTranslations("Common.Action");

  return (
    <div
      className={cn(
        "flex flex-col gap-3 p-5 border border-border rounded-lg transition-transform duration-200 ease-out hover:-translate-y-0.5",
        project.bgColor,
        project.status && "border-dashed",
      )}
    >
      <div>
        <h3 className="font-semibold">
          {t(`titles.${project.descriptionKey}`)}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          {t(project.descriptionKey)}
        </p>
      </div>
      {(project.status || project.docsUrl || project.repo) && (
        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="min-w-0">
            {project.status && (
              <Badge variant="outline" className="border-dashed">
                {t(`status.${project.status}`)}
              </Badge>
            )}
          </div>
          <div className="flex shrink-0 items-center justify-end gap-2">
            {project.docsUrl && (
              <Button variant="outline" size="icon-sm" asChild>
                <Link
                  href={project.docsUrl}
                  aria-label={tAction("documentation")}
                >
                  <BookOpen className="size-4" />
                </Link>
              </Button>
            )}
            {project.repo && (
              <GithubStarButton
                href={project.repo}
                iconOnly
                size="icon-sm"
                variant="outline"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
