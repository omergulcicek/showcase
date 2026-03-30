import { useFont } from "@/app/[locale]/modern-web-in-3-minutes/providers";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

export default function Step3Typography({ onNext, isCompleted }: StepProps) {
  const { font, setFont } = useFont();
  const t = useTranslations("ModernWeb.Step3");
  const p2Suffix = t("preferred").trim();

  return (
    <section className="space-y-4 mb-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")}
      </h2>
      <p className="text-lg text-muted-foreground">
        {t("description1")}{" "}
        <a
          href="https://nextjs.org/docs/app/getting-started/fonts"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          next/font
        </a>{" "}
        {t("description2")}
      </p>

      <div className="flex flex-wrap gap-2 my-6">
        <Button
          size="sm"
          variant="outline"
          className="font-serif"
          onClick={() => setFont("serif")}
        >
          {t("btn1")}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="font-geist"
          onClick={() => setFont("geist")}
        >
          {t("btn2")}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="font-mono"
          onClick={() => setFont("mono")}
        >
          {t("btn3")}
        </Button>
      </div>

      <p className="text-lg text-muted-foreground">
        {t("description3")}
        {p2Suffix ? (
          <>
            {" "}
            <strong>sans-serif</strong>{" "}
            {t("preferred")}{" "}
          </>
        ) : null}
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
