import { Providers } from "./providers";
import { Header } from "@/components/modern-web/Header";
import { Geist, JetBrains_Mono } from "next/font/google";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = params?.locale || "en";
  const t = await getTranslations({ locale, namespace: "ModernWeb.Metadata" });
  return {
    title: {
      template: `%s | ${t("title")}`,
      absolute: t("title"),
    },
    description: t("description"),
  };
}

export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className={`${geist.variable} ${jetbrainsMono.variable} min-h-full flex flex-col antialiased`}>
      <Providers>
        <Header />
        {children}
      </Providers>
    </div>
  );
}
