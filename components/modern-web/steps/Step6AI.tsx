"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MicIcon } from "lucide-react";
import SportsWidget from "@/components/sports-sm-02";
import StockWidget from "@/components/stock-sm-04";
import WeatherWidget from "@/components/weather-sm-01";

import {
  PromptInput,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  PromptInputModelSelect,
  PromptInputModelSelectItem,
} from "@/components/modern-web/ui/prompt-input";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

const models = [
  { id: "auto", name: "Auto" },
  { id: "claude", name: "Claude 4.6 Sonnet" },
  { id: "gemini", name: "Gemini 3.1 Pro" },
  { id: "gpt", name: "GPT-5.4" },
];

export default function Step6AI({ onNext, isCompleted }: StepProps) {
  const [text, setText] = useState("");
  const [model, setModel] = useState("auto");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [status, setStatus] = useState<"ready" | "submitted" | "streaming">(
    "ready",
  );
  const [visibleWidgets, setVisibleWidgets] = useState(0);

  const handleSubmit = (message: { text?: string; files?: unknown[] }) => {
    if (!message.text?.trim() && !message.files?.length) {
      return;
    }

    setStatus("submitted");
    setTimeout(() => {
      setStatus("streaming");

      // Show widgets sequentially
      setTimeout(() => {
        setVisibleWidgets(1);
        setTimeout(() => {
          const bottomElement = document.getElementById("ai-section-bottom");
          if (bottomElement) {
            bottomElement.scrollIntoView({ behavior: "smooth", block: "end" });
          }
        }, 100);
      }, 500);
      setTimeout(() => setVisibleWidgets(2), 1500);
      setTimeout(() => setVisibleWidgets(3), 2500);

      setTimeout(() => {
        setStatus("ready");
      }, 3000);
    }, 1000);
  };

  useEffect(() => {
    const promptToType =
      "Generate 3 minimalist micro-widgets for a 'Modern Web' dashboard, incorporating the design ethos of Wiggle UI and utilizing shadcn/ui and Tailwind CSS: 1. A stock tracker for NVIDIA ($NVDA) with a green price chart. 2. A live match tracker for Turkey vs Spain (2026 World Cup) with a 'Live' indicator. 3. A sleek weather widget with a simple sun icon.";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= promptToType.length) {
        setText(promptToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setIsSelectOpen(true);

          setTimeout(() => {
            setModel("gemini");
            setIsSelectOpen(false);

            setTimeout(() => {
              handleSubmit({ text: promptToType });
            }, 500);
          }, 1000);
        }, 500);
      }
    }, 20);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="space-y-4 mb-32" id="ai-section-header">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {"Artificial Intelligence"}
      </h2>
      <p className="text-lg text-muted-foreground">
        {
          "Our coding habits are changing; instead of entering every line manually, we now design living interfaces by giving the right directives to artificial intelligence."
        }
      </p>

      <div className="my-6 p-6 border border-border rounded-lg overflow-hidden relative bg-card">
        <PromptInput
          onSubmit={handleSubmit}
          className="relative"
          disableResetOnSubmit
        >
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder={"Ask me anything..."}
              className="min-h-[104px]"
            />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputButton
                type="button"
                className="cursor-pointer hover:bg-transparent hover:text-inherit"
              >
                <MicIcon className="size-4" />
              </PromptInputButton>
              <PromptInputModelSelect
                isOpen={isSelectOpen}
                onOpenChange={setIsSelectOpen}
                selectedKey={model}
                onSelectionChange={(key) => setModel(key as string)}
                items={models}
              >
                {(item) => (
                  <PromptInputModelSelectItem id={item.id}>
                    {item.name}
                  </PromptInputModelSelectItem>
                )}
              </PromptInputModelSelect>
            </PromptInputTools>
            <PromptInputSubmit
              className="cursor-pointer"
              isDisabled={!text && status === "ready"}
              status={status}
            />
          </PromptInputFooter>
        </PromptInput>
      </div>

      {visibleWidgets > 0 && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 my-8">
          <div
            className={cn(
              "transition-all duration-700 transform",
              visibleWidgets >= 1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            <StockWidget />
          </div>
          <div
            className={cn(
              "transition-all duration-700 transform",
              visibleWidgets >= 2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            <SportsWidget />
          </div>
          <div
            className={cn(
              "transition-all duration-700 transform",
              visibleWidgets >= 3
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            <WeatherWidget />
          </div>
        </div>
      )}

      <p className="text-lg text-muted-foreground mt-6">
        {
          "The interfaces of the future are no longer static, but smart and interactive. Everything looks great! "
        }
        <br />
        <span
          onClick={!isCompleted ? onNext : undefined}
          className={cn(
            isCompleted
              ? "cursor-default"
              : "underline underline-offset-2 cursor-pointer text-blue-600 hover:text-blue-800",
          )}
        >
          {"Let's check the result."}
        </span>
      </p>
      <div id="ai-section-bottom" />
    </section>
  );
}
