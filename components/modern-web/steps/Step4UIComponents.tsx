import { useState } from "react";
import { Button } from "@/components/modern-web/ui/button";
import { Input } from "@/components/modern-web/ui/input";
import { Checkbox } from "@/components/modern-web/ui/checkbox";
import { Label } from "@/components/modern-web/ui/label";
import { Field, FieldLabel } from "@/components/modern-web/ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/modern-web/ui/card";
import { Calendar } from "@/components/modern-web/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/modern-web/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { shadcnui as ShadcnIcon } from "@/components/modern-web/icons/shadcn";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

export default function Step4UIComponents({ onNext, isCompleted }: StepProps) {
  const [date, setDate] = useState<Date>();
  const dateLocale = enUS;
  const t = useTranslations("ModernWeb.Step4");

  return (
    <section className="space-y-4 mb-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")}{" "}
        <ShadcnIcon className="w-8 h-8 bg-black dark:invert rounded-xs p-1" />
      </h2>
      <p className="text-lg text-muted-foreground">
        {t("description1")}{" "}
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          shadcn/ui
        </a>
        {t("description2")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Standart HTML */}
        <div className="p-6 border border-border rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col gap-4">
          <p className="text-sm text-gray-500 font-medium">
            {t("htmlForm")}
          </p>

          <div className="flex flex-col gap-4 p-4 border border-gray-300 bg-white text-black">
            <h3 className="font-bold m-0">{t("profile")}</h3>

            <div className="flex flex-col gap-1">
              <label htmlFor="native-name" className="text-sm">
                {t("fullName")}
              </label>
              <input
                type="text"
                id="native-name"
                className="border border-gray-400 px-2 py-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="native-date" className="text-sm">
                {t("dob")}
              </label>
              <input
                type="date"
                id="native-date"
                className="border border-gray-400 px-2 py-1"
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="native-check" />
              <label htmlFor="native-check" className="text-sm">
                {t("terms")}
              </label>
            </div>

            <button className="mt-2 px-4 py-1 bg-gray-200 border border-gray-400 cursor-pointer self-start">
              {t("save")}
            </button>
          </div>
        </div>

        {/* Shadcn/UI */}
        <div className="p-6 border border-border rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col gap-4">
          <p className="text-sm text-gray-500 font-medium">
            {t("shadcnForm")}
          </p>

          <Card>
            <CardHeader>
              <CardTitle>{t("userProfile")}</CardTitle>
              <CardDescription>{t("updateInfo")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Field>
                <FieldLabel>{t("fullName")}</FieldLabel>
                <Input placeholder={t("placeholderName")} />
              </Field>

              <Field>
                <FieldLabel>{t("dob")}</FieldLabel>
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="outline"
                        className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                      />
                    }
                  >
                    <CalendarIcon className="h-4 w-4" />
                    {date ? (
                      format(date, "PPP", { locale: dateLocale })
                    ) : (
                      <span>{t("pickDate")}</span>
                    )}
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={dateLocale}
                    />
                  </PopoverContent>
                </Popover>
              </Field>

              <div className="flex items-center gap-2 mt-4">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="font-normal cursor-pointer">
                  {t("terms")}
                </Label>
              </div>
            </CardContent>
            <CardFooter className="border-border">
              <Button className="w-full">{t("save")}</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <p className="text-lg text-muted-foreground mt-6 whitespace-pre-wrap">
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
