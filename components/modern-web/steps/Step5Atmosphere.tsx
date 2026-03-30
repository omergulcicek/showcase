import { useTheme } from "next-themes";
import { Button } from "@/components/modern-web/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

export default function Step5Atmosphere({ onNext, isCompleted }: StepProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("ModernWeb.Step5");
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="space-y-4 mb-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")}
      </h2>
      <p className="text-lg text-muted-foreground">
        {t("description1")}{" "}
        <a
          href="https://github.com/pacocoursey/next-themes"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          next-themes
        </a>{" "}
        {t("description2")}
      </p>

      {mounted && (
        <div className="my-6 p-6 border border-border rounded-lg flex items-center justify-between bg-card text-card-foreground">
          <div>
            <h3 className="text-xl font-semibold">{t("toggleTheme")}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {t("currentTheme")} {theme === "dark" ? t("dark") : t("light")}
            </p>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}

      <p className="text-lg text-muted-foreground mt-6">
        {t("description3")}{" "}
        <span
          onClick={!isCompleted ? onNext : undefined}
          className={cn(
            isCompleted
              ? "cursor-default"
              : "underline underline-offset-2 cursor-pointer text-blue-600 hover:text-blue-800",
          )}
        >
          {t("action")}
        </span>
      </p>
    </section>
  );
}
