import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { GlobalRail } from "@/components/global-rail";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { CustomSidebarTrigger } from "@/components/custom-sidebar-trigger";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";

export const metadata = {
  title: "ViraStack",
  description: "ViraStack Open Source Projects",
  icons: {
    icon: "/virastack.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" dir="ltr" suppressHydrationWarning>
      <body>
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
                    <div className="flex items-center gap-2 px-12 md:px-16 w-full">
                      <DynamicBreadcrumb />
                    </div>
                  </div>
                  <div className="flex-1">{children}</div>
                </main>
              </SidebarProvider>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
