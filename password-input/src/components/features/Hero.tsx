"use client";

import { Github, LucideIcon, Package } from "lucide-react";

import { EnhancedHeader } from "@/components/widgets";

export interface Buttons {
  href: string;
  icon: LucideIcon;
  text: string;
}

export function Hero() {
  // Buttons data
  const buttons: Buttons[] = [
    {
      href: "https://github.com/omergulcicek/password-input",
      icon: Github,
      text: "Star on GitHub",
    },
    {
      href: "https://www.npmjs.com/package/@omergulcicek/password-input",
      icon: Package,
      text: "Npm Package",
    },
  ];

  return (
    <div className="relative py-12 mt-12">
      <EnhancedHeader
        title="@omergulcicek/password-input"
        subtitle="React hook that adds show/hide toggle to password inputs"
        buttons={buttons}
      />
    </div>
  );
}
