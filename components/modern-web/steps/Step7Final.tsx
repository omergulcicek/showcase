"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { GithubStarButton } from "@/components/github-star-button";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Step7Final() {
  const t = useTranslations("ModernWeb.Step7");

  useEffect(() => {
    const end = Date.now() + 1 * 2000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return (
    <section className="space-y-4 mb-44">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")}
      </h2>
      <p className="text-lg text-muted-foreground">
        {t("description1")}
      </p>

      <div className="mt-20 text-card-foreground">
        <h3 className="text-2xl font-semibold mb-3">{t("whatIs")}</h3>
        <p className="text-muted-foreground mb-6 text-base">
          {t("description2")}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild className="group">
            <Link href="/">
              {t("explore")}
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <GithubStarButton href="https://github.com/virastack" />
        </div>
      </div>
    </section>
  );
}
