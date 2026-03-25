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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | ViraStack Modern Web in 3 Minutes",
    absolute: "Modern Web in 3 Minutes | ViraStack",
  },
  description: "Learn the basics of modern web design step by step.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geist.variable} ${jetbrainsMono.variable} min-h-full flex flex-col antialiased`}>
      <Providers>
        <Header />
        {children}
      </Providers>
    </div>
  );
}
