"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface GithubStarButtonProps {
  href: string;
}

export function GithubStarButton({ href }: GithubStarButtonProps) {
  const t = useTranslations("Common.Action");

  return (
    <Button variant="outline" asChild>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Github />
        {t("starOnGithub")}
      </Link>
    </Button>
  );
}
