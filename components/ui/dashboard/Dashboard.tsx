"use client";

import { Link } from "@/i18n/navigation";

import { GitBranch, Github, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import { Balancer } from "react-wrap-balancer";

import { Button } from "@/components/ui/button";
import { StackList } from "@/components/ui/stack-list";
import { stackData } from "@/data/stack-data";
import { GithubStarButton } from "@/components/github-star-button";
import { ViraStackProjectHeading } from "@/components/virastack-project-heading";

export function Dashboard() {
  const t = useTranslations("NextjsBoilerplate.Dashboard");

  return (
    <section className="container py-4 px-12 md:px-16">
      <div className="flex flex-col items-center justify-center gap-6">
        <ViraStackProjectHeading
          projectName={t("projectName")}
          accentClassName="text-sky-500"
          textCenter
        />

        <Balancer as="p" className="max-w-3xl px-3 text-center text-base">
          {t.rich("description", {
            react: (chunks) => (
              <strong className="font-semibold">{chunks}</strong>
            ),
            typescript: (chunks) => (
              <strong className="font-semibold">{chunks}</strong>
            ),
            tailwind: (chunks) => (
              <strong className="font-semibold">{chunks}</strong>
            ),
            tanstack: (chunks) => (
              <strong className="font-semibold">{chunks}</strong>
            ),
          })}
        </Balancer>

        <GithubStarButton href="https://github.com/virastack/nextjs-boilerplate" />
      </div>

      <StackList data={stackData} />

      <div className="flex items-center justify-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link
            href="https://vercel.com/new/clone?repository-url=https://github.com/virastack/nextjs-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Rocket className="h-4 w-4" aria-hidden="true" />
            {t("deployToVercel")}
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link
            href="https://github.com/virastack/nextjs-boilerplate/generate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch className="h-4 w-4" aria-hidden="true" />
            {t("useTemplate")}
          </Link>
        </Button>
      </div>
    </section>
  );
}
