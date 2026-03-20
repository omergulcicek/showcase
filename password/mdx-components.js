import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import { BasicDemo } from "@/components/examples/BasicDemo";
import { CustomIconsDemo } from "@/components/examples/CustomIconsDemo";
import { CustomTextDemo } from "@/components/examples/CustomTextDemo";
import { ShadcnDemo } from "@/components/examples/ShadcnDemo";
import { SelfClosingDemo } from "@/components/examples/SelfClosingDemo";

const themeComponents = getThemeComponents();

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    BasicDemo,
    CustomIconsDemo,
    CustomTextDemo,
    ShadcnDemo,
    SelfClosingDemo,
    ...components,
  };
}
