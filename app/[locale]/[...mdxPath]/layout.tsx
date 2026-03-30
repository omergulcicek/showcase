import { Layout, LastUpdated } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import "nextra-theme-docs/style.css";

import type { Metadata } from "next";

const PROJECT_NAMES: Record<string, string> = {
  "nextjs-boilerplate": "Next.js Boilerplate",
  "ai-rules": "AI Rules",
  "input-mask": "Input Mask",
  "password-toggle": "Password Toggle",
  "modern-web-in-3-minutes": "Modern Web in 3 Minutes",
};

export async function generateMetadata(props: {
  params: Promise<{ locale: string; mdxPath?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const mdxPath = params.mdxPath ?? [];
  const projectSlug = mdxPath[0];
  
  let projectName = "";
  if (projectSlug) {
    projectName = PROJECT_NAMES[projectSlug] || projectSlug.charAt(0).toUpperCase() + projectSlug.slice(1);
  }

  return {
    title: projectName ? `${projectName} | ViraStack` : "ViraStack",
    description: "ViraStack Open Source Projects",
  };
}

const banner = <></>;
const navbar = <></>;
const footer = (
  <div className="w-full max-w-360 mx-auto flex flex-col items-center justify-between gap-4 py-8 md:flex-row px-6">
    <p className="text-sm text-gray-500">
      © {new Date().getFullYear()} ViraStack. MIT License.
    </p>
    <div className="flex items-center gap-4 text-sm text-gray-500">
      <span>
        Created by{" "}
        <a
          href="https://omergulcicek.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:text-black dark:hover:text-white transition-colors"
        >
          Ömer Gülçiçek
        </a>
      </span>
      <span className="text-gray-300">|</span>
      <a
        href="https://github.com/virastack"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium hover:text-black dark:hover:text-white transition-colors"
      >
        GitHub
      </a>
    </div>
  </div>
);

function resolveLocaleInPageMap(pageMap: any[], locale: string): any[] {
  return pageMap.map((item) => {
    const cloned = { ...item };
    if (cloned.route) {
      cloned.route = cloned.route.replace(/\[locale\]/g, locale);
    }
    if (cloned.href) {
      cloned.href = cloned.href.replace(/\[locale\]/g, locale);
    }
    if (cloned.children) {
      cloned.children = resolveLocaleInPageMap(cloned.children, locale);
    }
    return cloned;
  });
}

export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const rawPageMap = await getPageMap(`/${locale}`);
  const pageMap = resolveLocaleInPageMap(rawPageMap, locale);
  
  const t = await getTranslations({ locale, namespace: "Common.Nextra" });
  
  return (
    <>
      <Layout
        banner={banner}
        pageMap={pageMap}
        docsRepositoryBase="https://github.com/virastack"
        footer={footer}
        editLink={t("editLink")}
        feedback={{
          content: t("feedback"),
          labels: "feedback"
        }}
        toc={{
          title: t("tocTitle"),
          backToTop: t("backToTop"),
          float: true
        }}
        themeSwitch={{
          dark: t("themeDark"),
          light: t("themeLight"),
          system: t("themeSystem")
        }}
        lastUpdated={<LastUpdated locale={locale}>{t("lastUpdated")}</LastUpdated>}
        search={t("search")}
        navigation={{
          prev: true,
          next: true,
          prevText: t("navigationPrev"),
          nextText: t("navigationNext")
        }}
        copyPageButton={false}
      >
        <div className="px-4">
          {children}
        </div>
      </Layout>
    </>
  );
}
