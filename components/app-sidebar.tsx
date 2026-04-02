"use client";

import * as React from "react";
import { usePathname, Link } from "@/i18n/navigation";
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

const data: Record<string, any> = {
  home: {
    projects: sortedProjects,
    links: [
      {
        name: "Labs",
        url: "/labs",
        icon: FlaskConical,
        translationKey: "Common.Navigation.labs",
      },
      {
        name: "Support",
        url: "/support",
        icon: LifeBuoy,
        translationKey: "Common.Navigation.support",
      },
      {
        name: "Maintainers",
        url: "/maintainers",
        icon: Users,
        translationKey: "Common.Navigation.maintainers",
      },
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
        translationKey: "InputMask.navigation.gettingStarted",
        url: "/input-mask/getting-started",
        icon: BookOpen,
      },
      {
        title: "Examples",
        translationKey: "InputMask.navigation.examples",
        url: "/input-mask/examples",
        icon: Component,
        isActive: false,
        items: [
          {
            title: "Overview",
            translationKey: "InputMask.navigation.overview",
            url: "/input-mask/examples",
          },
          {
            title: "Credit Card",
            translationKey: "InputMask.navigation.creditCard",
            url: "/input-mask/examples/credit-card",
          },
          {
            title: "Card Number",
            translationKey: "InputMask.navigation.cardNumber",
            url: "/input-mask/examples/card",
          },
          {
            title: "Expiry",
            translationKey: "InputMask.navigation.expiry",
            url: "/input-mask/examples/expiry",
          },
          {
            title: "CVV",
            translationKey: "InputMask.navigation.cvv",
            url: "/input-mask/examples/cvv",
          },
          {
            title: "IBAN",
            translationKey: "InputMask.navigation.iban",
            url: "/input-mask/examples/iban",
          },
          {
            title: "Currency",
            translationKey: "InputMask.navigation.currency",
            url: "/input-mask/examples/currency",
          },
          {
            title: "TCKN",
            translationKey: "InputMask.navigation.tckn",
            url: "/input-mask/examples/tckn",
          },
          {
            title: "Tax Number",
            translationKey: "InputMask.navigation.taxNumber",
            url: "/input-mask/examples/tax-number",
          },
          {
            title: "Phone",
            translationKey: "InputMask.navigation.phone",
            url: "/input-mask/examples/phone",
          },
          {
            title: "Email",
            translationKey: "InputMask.navigation.email",
            url: "/input-mask/examples/email",
          },
          {
            title: "Zip Code",
            translationKey: "InputMask.navigation.zipCode",
            url: "/input-mask/examples/zip-code",
          },
          {
            title: "Date",
            translationKey: "InputMask.navigation.date",
            url: "/input-mask/examples/date",
          },
          {
            title: "Password",
            translationKey: "InputMask.navigation.password",
            url: "/input-mask/examples/password",
          },
          {
            title: "URL",
            translationKey: "InputMask.navigation.url",
            url: "/input-mask/examples/url",
          },
          {
            title: "Username",
            translationKey: "InputMask.navigation.username",
            url: "/input-mask/examples/username",
          },
          {
            title: "Alpha",
            translationKey: "InputMask.navigation.alpha",
            url: "/input-mask/examples/alpha",
          },
          {
            title: "Numeric",
            translationKey: "InputMask.navigation.numeric",
            url: "/input-mask/examples/numeric",
          },
          {
            title: "Text",
            translationKey: "InputMask.navigation.text",
            url: "/input-mask/examples/text",
          },
          {
            title: "Custom Mask",
            translationKey: "InputMask.navigation.customMask",
            url: "/input-mask/examples/custom-mask",
          },
        ],
      },
      {
        title: "Schema & Presets",
        translationKey: "InputMask.navigation.schemaPresets",
        url: "/input-mask/schema",
        icon: Code2,
      },
      {
        title: "Mask Options",
        translationKey: "InputMask.navigation.maskOptions",
        url: "/input-mask/mask-options",
        icon: Settings2,
      },
      {
        title: "Custom Masks",
        translationKey: "InputMask.navigation.customMasks",
        url: "/input-mask/custom-masks",
        icon: Terminal,
      },
      {
        title: "Currency",
        translationKey: "InputMask.navigation.currency",
        url: "/input-mask/currency",
        icon: Terminal,
      },
      {
        title: "Built-in Validation",
        translationKey: "InputMask.navigation.builtInValidation",
        url: "/input-mask/validation",
        icon: ShieldAlert,
      },
      {
        title: "Integrations",
        translationKey: "InputMask.navigation.integrations",
        url: "/input-mask/integrations",
        icon: LayoutTemplate,
        items: [
          {
            title: "Libraries",
            translationKey: "InputMask.navigation.libraries",
            url: "/input-mask/integrations/libraries",
          },
          {
            title: "Validation",
            translationKey: "InputMask.navigation.validation",
            url: "/input-mask/integrations/validation",
          },
        ],
      },
      {
        title: "API Reference",
        translationKey: "InputMask.navigation.apiReference",
        url: "/input-mask/api",
        icon: BookOpen,
        items: [
          {
            title: "Engine",
            translationKey: "InputMask.navigation.engine",
            url: "/input-mask/api/engine",
          },
          {
            title: "Currency",
            translationKey: "InputMask.navigation.currency",
            url: "/input-mask/api/currency",
          },
          {
            title: "Utilities",
            translationKey: "InputMask.navigation.utilities",
            url: "/input-mask/api/utilities",
          },
        ],
      },
      {
        title: "Types",
        translationKey: "InputMask.navigation.types",
        url: "/input-mask/types",
        icon: Code2,
      },
    ],
  },
  "password-toggle": {
    nav: [
      {
        title: "Getting Started",
        translationKey: "PasswordToggle.navigation.gettingStarted",
        url: "/password-toggle/getting-started",
        icon: BookOpen,
      },
      {
        title: "Examples",
        translationKey: "PasswordToggle.navigation.examples",
        url: "/password-toggle/examples",
        icon: Component,
        isActive: true,
        items: [
          {
            title: "Overview",
            translationKey: "PasswordToggle.navigation.overview",
            url: "/password-toggle/examples",
          },
          {
            title: "Basic",
            translationKey: "PasswordToggle.navigation.basic",
            url: "/password-toggle/examples/basic",
          },
          {
            title: "Custom Icons",
            translationKey: "PasswordToggle.navigation.customIcons",
            url: "/password-toggle/examples/custom-icons",
          },
          {
            title: "Custom Text",
            translationKey: "PasswordToggle.navigation.customText",
            url: "/password-toggle/examples/custom-text",
          },
          {
            title: "Self Closing",
            translationKey: "PasswordToggle.navigation.selfClosing",
            url: "/password-toggle/examples/self-closing",
          },
          {
            title: "Shadcn UI",
            translationKey: "PasswordToggle.navigation.shadcn",
            url: "/password-toggle/examples/shadcn",
          },
        ],
      },
      {
        title: "API Reference",
        translationKey: "PasswordToggle.navigation.apiReference",
        url: "/password-toggle/api",
        icon: BookOpen,
      },
    ],
  },
};

import { useTranslations } from "next-intl";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { setOpen, isMobile } = useSidebar();
  const t = useTranslations();

  // Determine context
  let context = "home";

  const activeProject = data.home.projects.find(
    (p: any) =>
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
              <SidebarGroupLabel>
                {t("Common.Navigation.projects")}
              </SidebarGroupLabel>
              <SidebarMenu>
                {data.home.projects.map((item: any) => (
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
                          <span>
                            {t(`Projects.titles.${item.descriptionKey}`)}
                          </span>
                        </Link>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>
                {t("Common.Navigation.community")}
              </SidebarGroupLabel>
              <SidebarMenu>
                {data.home.links.map((item: any) => {
                  const displayName = item.translationKey
                    ? t(item.translationKey)
                    : item.name;
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        tooltip={displayName}
                        isActive={pathname === item.url}
                      >
                        <Link
                          href={item.url}
                          target={
                            item.url.startsWith("http") ? "_blank" : undefined
                          }
                        >
                          <item.icon />
                          <span>{displayName}</span>
                          {item.external && (
                            <ExternalLink className="ml-auto size-3 text-muted-foreground" />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          </>
        )}

        {(context === "input-mask" || context === "password-toggle") && (
          <SidebarGroup>
            <SidebarMenu className="mt-2">
              {data[context].nav.map((item: any) => {
                const itemTitle = item.translationKey
                  ? t(item.translationKey)
                  : item.title;
                return item.items ? (
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
                        <SidebarMenuButton tooltip={itemTitle}>
                          {item.icon && <item.icon />}
                          <span>{itemTitle}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem: any) => {
                            const subItemTitle = subItem.translationKey
                              ? t(subItem.translationKey)
                              : subItem.title;
                            return (
                              <SidebarMenuSubItem key={subItem.url}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === subItem.url}
                                >
                                  <Link href={subItem.url}>
                                    <span>{subItemTitle}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={`${context}-${item.title}`}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      tooltip={itemTitle}
                    >
                      <Link href={item.url}>
                        {item.icon && <item.icon />}
                        <span>{itemTitle}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
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
