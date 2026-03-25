"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

import { projects } from "@/data/projects";

export function Header() {
  const pathname = usePathname();

  let projectName = "";
  let projectColor = "";

  const activeProject = projects.find(
    (p) =>
      p.url !== "/" &&
      p.url.startsWith("/") &&
      (pathname === p.url || pathname.startsWith(`${p.url}/`)),
  );

  if (activeProject) {
    if (activeProject.name === "Modern Web in 3 Minutes") projectName = "Guide";
    else if (activeProject.name === "AI Rules") projectName = "AI";
    else if (activeProject.name === "Next.js Boilerplate") projectName = "Next";
    else if (activeProject.name === "TanStack Boilerplate") projectName = "TanStack";
    else if (activeProject.name === "Start (CLI)") projectName = "Start";
    else if (activeProject.name === "Standards") projectName = "Standards";
    else if (activeProject.name === "Error Guard") projectName = "Guard";
    else if (activeProject.name === "Input Mask") projectName = "Mask";
    else if (activeProject.name === "Password Toggle") projectName = "Password";
    else projectName = activeProject.name;

    projectColor = activeProject.textColor || "";
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 cursor-pointer mr-6">
          <img
            src="/virastack.svg"
            alt="ViraStack"
            className="aspect-square size-8"
          />
          <span className="text-lg font-bold hidden sm:inline-block">
            ViraStack
            {projectName && (
              <span className={`ml-1 ${projectColor}`}>{projectName}</span>
            )}
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/virastack"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
