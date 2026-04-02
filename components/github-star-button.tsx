"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface GithubStarButtonProps {
  href: string;
  /** Icon-only (e.g. project cards); default full label */
  iconOnly?: boolean;
  variant?: "default" | "secondary" | "outline";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
}

export function GithubStarButton({
  href,
  iconOnly,
  variant = "default",
  size = "default",
}: GithubStarButtonProps) {
  const t = useTranslations("Common.Action");

  if (iconOnly) {
    return (
      <Button variant={variant} size={size} asChild>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("starOnGithub")}
        >
          <Github className="size-4" />
        </Link>
      </Button>
    );
  }

  return (
    <Button variant={variant} size={size} asChild>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Github />
        {t("starOnGithub")}
      </Link>
    </Button>
  );
}
