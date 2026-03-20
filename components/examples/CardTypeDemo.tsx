"use client";

import { useState } from "react";
import { useViraMask } from "@virastack/input-mask";
import { useForm } from "react-hook-form";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function CardTypeDemo() {
  const [cardType, setCardType] = useState<string>("unknown");
  const form = useForm();

  const mask = useViraMask({
    form,
    schema: {
      cardNumber: {
        preset: "card",
        onCardTypeChange: (type) => setCardType(type),
      },
    },
  });

  return (
    <article className="flex gap-4">
      <Field className="md:w-72 mt-4 gap-2">
        <FieldLabel htmlFor="card-type">Card Number</FieldLabel>
        <div className="relative">
          <Input id="card-type" {...mask.cardNumber} />
          {cardType !== "unknown" && (
            <span className="absolute right-3 top-2.5 text-xs font-bold text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
              {cardType}
            </span>
          )}
        </div>
      </Field>

      <div className="flex flex-col justify-center gap-2 md:w-80 h-14 mt-6 border border-dashed text-xs p-2 bg-muted/50">
        <div className="flex items-center justify-between gap-2">
          <span>Detected Type</span>{" "}
          <span className="font-bold">{cardType}</span>
        </div>
      </div>
    </article>
  );
}
