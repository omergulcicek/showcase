import { useFont } from "@/app/modern-web-in-3-minutes/providers";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

export default function Step3Typography({ onNext, isCompleted }: StepProps) {
  const { font, setFont } = useFont();
  const p2Suffix = "is usually preferred. What about our".trim();

  return (
    <section className="space-y-4 mb-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {"Typography"}
      </h2>
      <p className="text-lg text-muted-foreground">
        {"The browser's default serif font strains the eyes. With Next.js's "}{" "}
        <a
          href="https://nextjs.org/docs/app/getting-started/fonts"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          next/font
        </a>{" "}
        {"module, we can add modern fonts with zero performance loss."}
      </p>

      <div className="flex flex-wrap gap-2 my-6">
        <Button
          size="sm"
          variant="outline"
          className="font-serif"
          onClick={() => setFont("serif")}
        >
          {"Times New Roman: Default"}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="font-geist"
          onClick={() => setFont("geist")}
        >
          {"Geist: Modern and clean"}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="font-mono"
          onClick={() => setFont("mono")}
        >
          {"JetBrains Mono: Technical"}
        </Button>
      </div>

      <p className="text-lg text-muted-foreground">
        {"Click the buttons to see the difference. In modern designs, "}
        {p2Suffix ? (
          <>
            {" "}
            <strong>sans-serif</strong>{" "}
            {"is usually preferred. What about our"}{" "}
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
          {"UI components?"}
        </span>
      </p>
    </section>
  );
}
