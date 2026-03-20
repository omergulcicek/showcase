"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function CustomSidebarTrigger() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMask = pathname.startsWith("/mask");
  const isPassword = pathname.startsWith("/password");

  const hasSidebar = isHome || isMask || isPassword;

  if (!hasSidebar) return null;

  return <SidebarTrigger />;
}
