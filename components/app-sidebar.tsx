"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  Code2,
  Component,
  Github,
  Home,
  LayoutTemplate,
  LifeBuoy,
  Settings2,
  ShieldAlert,
  Terminal,
  Twitter,
  Users,
  ChevronRight,
  Bot,
  ExternalLink,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

// Define the data for different contexts
const data = {
  home: {
    projects: [
      {
        name: "Next.js Boilerplate",
        url: "/nextjs-boilerplate",
        color: "bg-blue-400",
        textColor: "text-blue-400",
      },
      {
        name: "AI Rules",
        url: "/ai",
        color: "bg-fuchsia-400",
        textColor: "text-fuchsia-400",
      },
      {
        name: "Mask",
        url: "/mask",
        color: "bg-green-500",
        textColor: "text-green-500",
      },
      {
        name: "Password",
        url: "/password",
        color: "bg-red-500",
        textColor: "text-red-500",
      },
      {
        name: "Modern Web in 3 Minutes",
        url: "/modern-web-in-3-minutes",
        color: "bg-amber-300",
        textColor: "text-amber-500",
      },
    ],
    links: [
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
    ],
  },
  mask: {
    nav: [
      {
        title: "Getting Started",
        url: "/mask/getting-started",
        icon: BookOpen,
      },
      {
        title: "Examples",
        url: "/mask/examples",
        icon: Component,
        isActive: false,
        items: [
          { title: "Overview", url: "/mask/examples" },
          { title: "Credit Card", url: "/mask/examples/credit-card" },
          { title: "Card Number", url: "/mask/examples/card" },
          { title: "Expiry", url: "/mask/examples/expiry" },
          { title: "CVV", url: "/mask/examples/cvv" },
          { title: "IBAN", url: "/mask/examples/iban" },
          { title: "Currency", url: "/mask/examples/currency" },
          { title: "TCKN", url: "/mask/examples/tckn" },
          { title: "Tax Number", url: "/mask/examples/tax-number" },
          { title: "Phone", url: "/mask/examples/phone" },
          { title: "Email", url: "/mask/examples/email" },
          { title: "Zip Code", url: "/mask/examples/zip-code" },
          { title: "Date", url: "/mask/examples/date" },
          { title: "Password", url: "/mask/examples/password" },
          { title: "URL", url: "/mask/examples/url" },
          { title: "Username", url: "/mask/examples/username" },
          { title: "Alpha", url: "/mask/examples/alpha" },
          { title: "Numeric", url: "/mask/examples/numeric" },
          { title: "Text", url: "/mask/examples/text" },
          { title: "Custom Mask", url: "/mask/examples/custom-mask" },
        ],
      },
      {
        title: "Schema & Presets",
        url: "/mask/schema",
        icon: Code2,
      },
      {
        title: "Mask Options",
        url: "/mask/mask-options",
        icon: Settings2,
      },
      {
        title: "Custom Masks",
        url: "/mask/custom-masks",
        icon: Terminal,
      },
      {
        title: "Currency",
        url: "/mask/currency",
        icon: Terminal,
      },
      {
        title: "Built-in Validation",
        url: "/mask/validation",
        icon: ShieldAlert,
      },
      {
        title: "Integrations",
        url: "/mask/integrations",
        icon: LayoutTemplate,
        items: [
          { title: "Libraries", url: "/mask/integrations/libraries" },
          { title: "Validation", url: "/mask/integrations/validation" },
        ],
      },
      {
        title: "API Reference",
        url: "/mask/api",
        icon: BookOpen,
        items: [
          { title: "Engine", url: "/mask/api/engine" },
          { title: "Currency", url: "/mask/api/currency" },
          { title: "Utilities", url: "/mask/api/utilities" },
        ],
      },
      {
        title: "Types",
        url: "/mask/types",
        icon: Code2,
      },
    ],
  },
  password: {
    nav: [
      {
        title: "Getting Started",
        url: "/password/getting-started",
        icon: BookOpen,
      },
      {
        title: "Examples",
        url: "/password/examples",
        icon: Component,
        isActive: false,
        items: [
          { title: "Overview", url: "/password/examples" },
          { title: "Basic", url: "/password/examples/basic" },
          { title: "Custom Icons", url: "/password/examples/custom-icons" },
          { title: "Custom Text", url: "/password/examples/custom-text" },
          { title: "Self Closing", url: "/password/examples/self-closing" },
          { title: "Shadcn UI", url: "/password/examples/shadcn" },
        ],
      },
      {
        title: "API Reference",
        url: "/password/api",
        icon: BookOpen,
      },
    ],
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { setOpen, isMobile } = useSidebar();

  // Determine context
  let context = "home";

  const activeProject = data.home.projects.find(
    (p) =>
      p.url !== "/" &&
      p.url.startsWith("/") &&
      (pathname === p.url || pathname.startsWith(`${p.url}/`)),
  );

  if (activeProject) {
    if (activeProject.name === "Mask") context = "mask";
    else if (activeProject.name === "Password") context = "password";
  }

  // Effect to open sidebar when context changes (project changes)
  React.useEffect(() => {
    if (!isMobile) {
      setOpen(true);
    }
  }, [context, setOpen, isMobile]);

  return (
    <Sidebar 
      collapsible="icon" 
      className={cn(
        "top-16 h-[calc(100svh-4rem)]",
        context !== "home" && "md:left-14"
      )} 
      {...props}
    >
      <SidebarContent>
        {context === "home" && (
          <>
            <SidebarGroup>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
              <SidebarMenu>
                {data.home.projects.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild tooltip={item.name}>
                      <Link href={item.url}>
                        <div
                          className={`size-3 min-w-3 rounded-full ${item.color}`}
                        />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Community</SidebarGroupLabel>
              <SidebarMenu>
                {data.home.links.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild tooltip={item.name}>
                      <Link
                        href={item.url}
                        target={
                          item.url.startsWith("http") ? "_blank" : undefined
                        }
                      >
                        <item.icon />
                        <span>{item.name}</span>
                        {item.external && (
                          <ExternalLink className="ml-auto size-3 text-muted-foreground" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </>
        )}

        {(context === "mask" || context === "password") && (
          <SidebarGroup>
            <SidebarMenu>
              {data[context].nav.map((item) =>
                item.items ? (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={
                      item.isActive ||
                      (pathname.startsWith(item.url) && pathname !== item.url)
                    }
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={pathname === subItem.url}
                              >
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      tooltip={item.title}
                    >
                      <Link href={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          © {new Date().getFullYear()} ViraStack.
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
