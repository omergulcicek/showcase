import { Layout } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Link from "next/link";
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
  params: Promise<{ mdxPath?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const mdxPath = params.mdxPath ?? [];
  const projectSlug = mdxPath[0];
  
  let projectName = "";
  if (projectSlug) {
    projectName = PROJECT_NAMES[projectSlug] || projectSlug.charAt(0).toUpperCase() + projectSlug.slice(1);
  }

  // Nextra'nın kendi sayfa title'ını kullanması için template'i kaldırıyoruz
  // Sayfa bazlı title'lar [...mdxPath]/page.tsx içindeki generateMetadata'da yönetilecek
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

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout
        banner={banner}
        pageMap={await getPageMap()}
        docsRepositoryBase="https://github.com/virastack"
        footer={footer}
      >
        <div className="px-4">
          {children}
        </div>
      </Layout>
    </>
  );
}
