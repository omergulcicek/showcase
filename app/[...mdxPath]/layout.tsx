import { Layout } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Link from "next/link";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: {
    template: "ViraStack - %s",
    default: "ViraStack",
  },
  description: "ViraStack Open Source Projects",
};

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
      <Head></Head>
      <Layout
        banner={banner}
        pageMap={await getPageMap()}
        docsRepositoryBase="https://github.com/virastack"
        footer={footer}
      >
        {children}
      </Layout>
    </>
  );
}
