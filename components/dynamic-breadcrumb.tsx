"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const projectNames: Record<string, string> = {
  "modern-web-in-3-minutes": "Guide",
  ai: "AI",
  "nextjs-boilerplate": "Next.js Boilerplate",
  mask: "Mask",
  password: "Password",
  cli: "Start (CLI)",
};

function formatSegment(segment: string, index: number) {
  if (index === 0 && projectNames[segment]) {
    return projectNames[segment];
  }
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function DynamicBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (pathname === "/") return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          {segments.length === 0 ? (
            <BreadcrumbPage>ViraStack</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href="/">ViraStack</BreadcrumbLink>
          )}
        </BreadcrumbItem>

        {segments.length > 0 && (
          <BreadcrumbSeparator className="hidden md:block" />
        )}

        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const title = formatSegment(segment, index);

          return (
            <React.Fragment key={href}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
