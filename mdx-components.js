import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";

// Mask Demos
import { MaskedInputDemo } from "@/components/examples/MaskedInputDemo";
import { CreditCardDemo } from "@/components/examples/CreditCardDemo";
import { CustomMaskDemo } from "@/components/examples/CustomMaskDemo";
import { CardValidatorDemo } from "@/components/examples/CardValidatorDemo";
import { CardTypeDemo } from "@/components/examples/CardTypeDemo";

// Password Demos
import { BasicDemo } from "@/components/examples/BasicDemo";
import { CustomIconsDemo } from "@/components/examples/CustomIconsDemo";
import { CustomTextDemo } from "@/components/examples/CustomTextDemo";
import { ShadcnDemo } from "@/components/examples/ShadcnDemo";
import { SelfClosingDemo } from "@/components/examples/SelfClosingDemo";
import { ViraStackProjectHeading } from "@/components/virastack-project-heading";

const themeComponents = getThemeComponents();

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    MaskedInputDemo,
    CreditCardDemo,
    CustomMaskDemo,
    CardValidatorDemo,
    CardTypeDemo,
    BasicDemo,
    CustomIconsDemo,
    CustomTextDemo,
    ShadcnDemo,
    SelfClosingDemo,
    ViraStackProjectHeading,
    ...components,
  };
}
