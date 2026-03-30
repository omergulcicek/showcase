import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
  isStyled?: boolean;
}

export default function Step0Content({ onNext, isCompleted, isStyled }: StepProps) {
  const t = useTranslations("ModernWeb.Step0");
  
  if (!isStyled) {
    return (
      <section className="text-primary px-12" style={{ fontFamily: '"Times New Roman", Times, serif', lineHeight: 'normal' }}>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', margin: '0.67em 0' }}>{t("title")}</h1>
        <p style={{ margin: '1em 0' }}>
          {t("description1")}
        </p>
        <p style={{ margin: '1em 0' }}>
          {t("description2")} <span onClick={!isCompleted ? onNext : undefined} style={isCompleted ? { cursor: 'default' } : { color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>{t("action")}</span>
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4 mb-20">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">{t("title")}</h1>
      <p className="text-lg text-muted-foreground">
        {t("description1")}
      </p>
      <p className="text-lg text-muted-foreground">
        {t("description2")} <span onClick={!isCompleted ? onNext : undefined} className={cn(isCompleted ? "cursor-default" : "underline underline-offset-2 cursor-pointer text-blue-600 hover:text-blue-800")}>{t("action")}</span>
      </p>
    </section>
  );
}
