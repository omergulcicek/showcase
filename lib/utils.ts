import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const focusRing = tv({
  base: "outline-none",
  variants: {
    isFocusVisible: {
      true: "ring-2 ring-ring ring-offset-2 ring-offset-background",
    },
  },
});

export function truncate(text: string, maxLength = 15): string {
  if (typeof text !== "string") return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}
