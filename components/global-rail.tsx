"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Github, Twitter, LifeBuoy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Next.js Boilerplate",
    url: "/nextjs-boilerplate",
    color: "bg-blue-400",
  },
  { name: "AI Rules", url: "/ai", color: "bg-fuchsia-400" },
  { name: "Mask", url: "/mask", color: "bg-green-500" },
  { name: "Password", url: "/password", color: "bg-red-500" },
  {
    name: "Modern Web in 3 Minutes",
    url: "/modern-web-in-3-minutes",
    color: "bg-amber-300",
  },
];

const links = [
  { name: "Support", url: "/support", icon: LifeBuoy },
  { name: "Maintainers", url: "/maintainers", icon: Users },
  {
    name: "GitHub",
    url: "https://github.com/virastack",
    icon: Github,
    external: true,
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com/omergulcicek",
    icon: Twitter,
    external: true,
  },
];

export function GlobalRail() {
  const pathname = usePathname();

  const activeProject = projects.find(
    (p) =>
      p.url !== "/" &&
      p.url.startsWith("/") &&
      (pathname === p.url || pathname.startsWith(`${p.url}/`)),
  );

  if (!activeProject) return null;

  return (
    <>
      <div className="hidden md:block w-14 shrink-0" />
      <div className="hidden md:flex flex-col items-center w-14 h-[calc(100svh-4rem)] fixed left-0 top-16 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-r border-border/40 bg-sidebar py-4 gap-2 z-20 shrink-0">
        {/* Projects */}
      <div className="flex flex-col gap-1 w-full items-center">
        <TooltipProvider delayDuration={0}>
          {projects.map((item) => {
            const isActive =
              pathname === item.url || pathname.startsWith(`${item.url}/`);
            return (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.url}
                    className={cn(
                      "flex items-center justify-center size-8 rounded-lg transition-colors hover:bg-sidebar-accent",
                      isActive && "bg-sidebar-accent",
                    )}
                  >
                    <div className={cn(`size-3 rounded`, item.color)} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>
                  {item.name}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>
      </div>

      {/* Separator */}
      <div className="w-8 h-px bg-border/40 my-2" />

      {/* Links */}
      <div className="flex flex-col gap-1 w-full items-center">
        <TooltipProvider delayDuration={0}>
          {links.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <Link
                  href={item.url}
                  target={item.external ? "_blank" : undefined}
                  className="flex items-center justify-center size-8 rounded-lg text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={10}>
                {item.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
    </>
  );
}
