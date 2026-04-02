"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface GithubStarButtonProps {
  href: string;
  /** Icon-only (e.g. project cards); default full label */
  iconOnly?: boolean;
}

export function GithubStarButton({ href, iconOnly }: GithubStarButtonProps) {
  const t = useTranslations("Common.Action");

  if (iconOnly) {
    return (
      <Button variant="outline" size="icon-sm" asChild>
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
    <Button variant="outline" size="sm" asChild>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Github />
        {t("starOnGithub")}
      </Link>
    </Button>
  );
}
