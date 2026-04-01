import "nextra-theme-docs/style.css";
import "../globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { GlobalRail } from "@/components/global-rail";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { CustomSidebarTrigger } from "@/components/custom-sidebar-trigger";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

import { NextIntlClientProvider } from "next-intl";
import { QueryProvider } from "@/components/query-provider";

import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | ViraStack",
    default:
      "ViraStack | High Performance Frontend Architectures and Developer-Centric Tools for Modern Software Standards.",
  },
  description: "ViraStack Open Source Projects",
  icons: {
    icon: "/virastack.png",
  },
};

import { SUPPORTED_LOCALES } from "@/constants/i18n.constants";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale =
    typeof rawLocale === "string" && rawLocale.trim().length > 0
      ? rawLocale.trim()
      : "";

  if (!locale || !hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr" suppressHydrationWarning className="group/body">
      <body>
        <QueryProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex min-h-screen flex-col">
                <Header />
                <div className="flex flex-1 overflow-hidden">
                  <SidebarProvider className="min-h-0">
                    <GlobalRail />
                    <AppSidebar />
                    <main className="flex-1 overflow-auto relative flex flex-col">
                      <div className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 ml-0 relative">
                        <div className="absolute left-4 md:left-6 z-10 flex items-center justify-center">
                          <CustomSidebarTrigger />
                        </div>
                        <DynamicBreadcrumb />
                      </div>
                      <div className="flex-1">{children}</div>
                    </main>
                  </SidebarProvider>
                </div>
              </div>
            </ThemeProvider>
          </NextIntlClientProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
