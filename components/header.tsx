"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Github } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import { Button } from "./ui/button";

import { projects } from "@/data/projects";
import { Separator } from "./ui/separator";
import { XIcon } from "./icons/X";

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
    else if (activeProject.name === "Next.js Boilerplate")
      projectName = "Next.js";
    else if (activeProject.name === "TanStack Boilerplate")
      projectName = "TanStack";
    else if (activeProject.name === "Start (CLI)") projectName = "Start";
    else if (activeProject.name === "Standards") projectName = "Standards";
    else if (activeProject.name === "Error Guard") projectName = "Guard";
    else if (activeProject.name === "Input Mask") projectName = "Mask";
    else if (activeProject.name === "Password Toggle") projectName = "Password";
    else projectName = activeProject.name;

    projectColor = activeProject.textColor || "";
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-12 items-center gap-2 px-4">
        <Link href="/" className="flex items-center gap-1 cursor-pointer">
          <img
            src="/virastack.png"
            alt="ViraStack"
            className="aspect-square size-8"
          />
          <span className="text-lg font-black hidden sm:inline-block">
            ViraStack
            {projectName && (
              <span className={`ml-1 font-medium italic ${projectColor}`}>
                {projectName}
              </span>
            )}
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-2 h-6">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/virastack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://x.com/virastack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <XIcon />
                  <span className="sr-only">X (Twitter)</span>
                </a>
              </Button>
            </div>
            <Separator orientation="vertical" />
            <LocaleSwitcher />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
