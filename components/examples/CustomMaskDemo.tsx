"use client";

import { useViraMask } from "@virastack/input-mask";
import { useForm } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function CustomMaskDemo() {
  const form = useForm();

  const mask = useViraMask({
    form,
    schema: {
      input: {
        inputMode: 'numeric',
        allowedChars: /[0-9]/,
        validate: true,
        validator: (value) => parseInt(value, 10) % 2 === 0,
      },
    },
  });

  return (
    <article className="flex gap-4">
      <Field className="md:w-72 mt-4 gap-2">
        <FieldLabel htmlFor="even-number">Even Number</FieldLabel>
        <Input id="even-number" {...mask.input} />
        {form.formState.touchedFields.input &&
          form.formState.errors.input && (
            <FieldError>Must be an even number</FieldError>
          )}
      </Field>

      <div className="flex flex-col justify-center gap-2 md:w-80 h-14 mt-6 border border-dashed border-border text-xs p-2 bg-muted/50">
        <div className="flex items-center justify-between gap-2">
          <span>Raw Value</span> <span>{mask.input.rawValue}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span>Display Value</span> <span>{mask.input.value}</span>
        </div>
      </div>
    </article>
  );
}
