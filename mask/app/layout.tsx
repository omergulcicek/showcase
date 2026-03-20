import { Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {
  title: {
    template: "Mask - %s",
    default: "Mask",
  },
  description:
    "Mask is a lightweight, zero-dependency masking library for React Hook Form.",
  icons: {
    icon: "/icon.svg",
  },
};

const banner = <></>;
const navbar = (
  <Navbar
    logo={
      <div className="flex items-center gap-2">
        <img src="/icon.svg" alt="Vira Stack logo" width="32" />
        <strong>Mask</strong>{" "}
        <span className="text-sm text-gray-500">v1.0.0</span>
      </div>
    }
  />
);
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
