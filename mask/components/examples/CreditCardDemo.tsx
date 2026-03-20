"use client";

import { useViraMask } from "@virastack/input-mask";
import { useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function CreditCardDemo() {
  const form = useForm({
    mode: "onChange",
    defaultValues: { cardNumber: "", expiry: "", cvv: "" },
  });
  const {
    formState: { errors },
  } = form;

  const mask = useViraMask({
    form,
    schema: {
      cardNumber: {
        preset: "card",
        errorMessage: "Invalid card number",
      },
      expiry: {
        preset: "expiry",
        errorMessage: "Invalid date",
      },
      cvv: {
        preset: "cvv",
        errorMessage: "Invalid CVV",
      },
    },
  });

  return (
    <Field className="md:w-64 mt-4">
      <div>
        <FieldLabel htmlFor="cardNumber">Credit Card Number</FieldLabel>
        <Input
          id="cardNumber"
          {...mask.cardNumber}
          placeholder="4532 1234 5678 9012"
        />
        <FieldError>{errors.cardNumber?.message as string}</FieldError>
      </div>
      <div className="flex gap-4">
        <div>
          <FieldLabel htmlFor="expiry">Expiration Date</FieldLabel>
          <Input id="expiry" {...mask.expiry} placeholder="12/26" />
          <FieldError>{errors.expiry?.message as string}</FieldError>
        </div>
        <div>
          <FieldLabel htmlFor="cvv">CVV</FieldLabel>
          <Input id="cvv" {...mask.cvv} placeholder="123" />
          <FieldError>{errors.cvv?.message as string}</FieldError>
        </div>
      </div>
    </Field>
  );
}
