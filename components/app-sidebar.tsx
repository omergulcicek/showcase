"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  Code2,
  Component,
  FlaskConical,
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

import { projects } from "@/data/projects";

// Define the data for different contexts
const statusOrder = {
  "In Dev": 1,
  Research: 2,
  "Coming Soon": 3,
};

const sortedProjects = [...projects].sort((a, b) => {
  const aStatus = a.status ? statusOrder[a.status] : 0;
  const bStatus = b.status ? statusOrder[b.status] : 0;
  return aStatus - bStatus;
});

const data = {
  home: {
    projects: sortedProjects,
    links: [
      { name: "Labs", url: "/labs", icon: FlaskConical },
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
        url: "https://twitter.com/virastack",
        icon: Twitter,
        external: true,
      },
    ],
  },
  "input-mask": {
    nav: [
      {
        title: "Getting Started",
        url: "/input-mask/getting-started",
        icon: BookOpen,
      },
      {
        title: "Examples",
        url: "/input-mask/examples",
        icon: Component,
        isActive: false,
        items: [
          { title: "Overview", url: "/input-mask/examples" },
          { title: "Credit Card", url: "/input-mask/examples/credit-card" },
          { title: "Card Number", url: "/input-mask/examples/card" },
          { title: "Expiry", url: "/input-mask/examples/expiry" },
          { title: "CVV", url: "/input-mask/examples/cvv" },
          { title: "IBAN", url: "/input-mask/examples/iban" },
          { title: "Currency", url: "/input-mask/examples/currency" },
          { title: "TCKN", url: "/input-mask/examples/tckn" },
          { title: "Tax Number", url: "/input-mask/examples/tax-number" },
          { title: "Phone", url: "/input-mask/examples/phone" },
          { title: "Email", url: "/input-mask/examples/email" },
          { title: "Zip Code", url: "/input-mask/examples/zip-code" },
          { title: "Date", url: "/input-mask/examples/date" },
          { title: "Password", url: "/input-mask/examples/password" },
          { title: "URL", url: "/input-mask/examples/url" },
          { title: "Username", url: "/input-mask/examples/username" },
          { title: "Alpha", url: "/input-mask/examples/alpha" },
          { title: "Numeric", url: "/input-mask/examples/numeric" },
          { title: "Text", url: "/input-mask/examples/text" },
          { title: "Custom Mask", url: "/input-mask/examples/custom-mask" },
        ],
      },
      {
        title: "Schema & Presets",
        url: "/input-mask/schema",
        icon: Code2,
      },
      {
        title: "Mask Options",
        url: "/input-mask/mask-options",
        icon: Settings2,
      },
      {
        title: "Custom Masks",
        url: "/input-mask/custom-masks",
        icon: Terminal,
      },
      {
        title: "Currency",
        url: "/input-mask/currency",
        icon: Terminal,
      },
      {
        title: "Built-in Validation",
        url: "/input-mask/validation",
        icon: ShieldAlert,
      },
      {
        title: "Integrations",
        url: "/input-mask/integrations",
        icon: LayoutTemplate,
        items: [
          { title: "Libraries", url: "/input-mask/integrations/libraries" },
          { title: "Validation", url: "/input-mask/integrations/validation" },
        ],
      },
      {
        title: "API Reference",
        url: "/input-mask/api",
        icon: BookOpen,
        items: [
          { title: "Engine", url: "/input-mask/api/engine" },
          { title: "Currency", url: "/input-mask/api/currency" },
          { title: "Utilities", url: "/input-mask/api/utilities" },
        ],
      },
      {
        title: "Types",
        url: "/input-mask/types",
        icon: Code2,
      },
    ],
  },
  "password-toggle": {
    nav: [
      {
        title: "Getting Started",
        url: "/password-toggle/getting-started",
        icon: BookOpen,
      },
      {
        title: "Examples",
        url: "/password-toggle/examples",
        icon: Component,
        isActive: true,
        items: [
          { title: "Overview", url: "/password-toggle/examples" },
          { title: "Basic", url: "/password-toggle/examples/basic" },
          {
            title: "Custom Icons",
            url: "/password-toggle/examples/custom-icons",
          },
          {
            title: "Custom Text",
            url: "/password-toggle/examples/custom-text",
          },
          {
            title: "Self Closing",
            url: "/password-toggle/examples/self-closing",
          },
          { title: "Shadcn UI", url: "/password-toggle/examples/shadcn" },
        ],
      },
      {
        title: "API Reference",
        url: "/password-toggle/api",
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
      (pathname === p.url || pathname.startsWith(p.url.split("#")[0])) &&
      !p.status,
  );

  if (activeProject) {
    if (activeProject.name === "Input Mask") context = "input-mask";
    else if (activeProject.name === "Password Toggle")
      context = "password-toggle";
    else context = "home";
  }

  // Effect to open sidebar when context changes (project changes)
  React.useEffect(() => {
    if (!isMobile) {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context, isMobile]);

  return (
    <Sidebar
      collapsible="icon"
      className={cn(
        "top-12 h-[calc(100svh-4rem)]",
        (context === "input-mask" || context === "password-toggle") &&
          "md:left-14",
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
                      {item.status ? (
                        <></>
                      ) : (
                        // <Link href={item.url}>
                        //   <div
                        //     className={`size-3 min-w-3 rounded ${item.color}`}
                        //   />
                        //   <span
                        //     className={cn(
                        //       "group-data-[collapsible=icon]:hidden",
                        //       "text-muted-foreground",
                        //     )}
                        //   >
                        //     {item.name}
                        //   </span>
                        //   <span className="ml-auto text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground group-data-[collapsible=icon]:hidden">
                        //     Soon
                        //   </span>
                        // </Link>
                        <Link href={item.url}>
                          <div
                            className={`size-3 min-w-3 rounded ${item.color}`}
                          />
                          <span>{item.name}</span>
                        </Link>
                      )}
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
                    <SidebarMenuButton
                      asChild
                      tooltip={item.name}
                      isActive={pathname === item.url}
                    >
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

        {(context === "input-mask" || context === "password-toggle") && (
          <SidebarGroup>
            <SidebarMenu className="mt-2">
              {data[context].nav.map((item) =>
                item.items ? (
                  <Collapsible
                    key={`${context}-${item.title}`}
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
                  <SidebarMenuItem key={`${context}-${item.title}`}>
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
        {/* {context === "ai-rules" && (
          <SidebarGroup>
            <SidebarMenu className="mt-2">
            </SidebarMenu>
          </SidebarGroup>
        )} */}
      </SidebarContent>

      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
          © {new Date().getFullYear()} ViraStack
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
