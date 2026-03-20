import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import { MaskedInputDemo } from "@/components/examples/MaskedInputDemo";
import { CreditCardDemo } from "@/components/examples/CreditCardDemo";
import { CustomMaskDemo } from "@/components/examples/CustomMaskDemo";
import { CardValidatorDemo } from "@/components/examples/CardValidatorDemo";
import { CardTypeDemo } from "@/components/examples/CardTypeDemo";

const themeComponents = getThemeComponents();

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    MaskedInputDemo,
    CreditCardDemo,
    CustomMaskDemo,
    CardValidatorDemo,
    CardTypeDemo,
    ...components,
  };
}
