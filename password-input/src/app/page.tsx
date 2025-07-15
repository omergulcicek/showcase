"use client";

import React from "react";
import { House, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Hero } from "@/components/features";

import { usePasswordInput } from "@omergulcicek/password-input";

export default function Home() {
  const {
    inputProps: defaultPasswordInput,
    InputWrapper: DefaultInputWrapper,
    wrapperProps: defaultPasswordInputWrapperProps,
  } = usePasswordInput({
    password: true,
  });

  const {
    inputProps: customTextPasswordInput,
    InputWrapper: CustomTextInputWrapper,
    wrapperProps: customTextPasswordInputWrapperProps,
  } = usePasswordInput({
    password: {
      icons: {
        show: <span className="text-xs">Show</span>,
        hide: <span className="text-xs">Hide</span>,
      },
    },
  });

  const {
    inputProps: customIconPasswordInput,
    InputWrapper: CustomIconInputWrapper,
    wrapperProps: customIconPasswordInputWrapperProps,
  } = usePasswordInput({
    password: {
      icons: {
        show: <House className="size-4" />,
        hide: <Star className="size-4" />,
      },
    },
  });

  return (
    <>
      <Hero />

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl mb-4">@omergulcicek/password-input</h1>
        <h2 className="text-xl font-bold mb-8">Examples</h2>

        <div className="space-y-12">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border text-xs">
                <pre className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">{`"use client"

import React from "react";
import { Input } from "@/components/ui/input";

import { usePasswordInput } from "@omergulcicek/password-input";

export default function Home() {
  const {
    inputProps,
    InputWrapper,
    wrapperProps,
  } = usePasswordInput({
    password: true,
  });

  return (
    <InputWrapper {...wrapperProps}>
      <Input {...inputProps} placeholder="Enter your password" />
    </InputWrapper>
  )
}`}</pre>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Default View</h2>
              <DefaultInputWrapper {...defaultPasswordInputWrapperProps}>
                <Input
                  {...defaultPasswordInput}
                  placeholder="Enter your password"
                />
              </DefaultInputWrapper>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border text-xs">
                <pre className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">{`"use client"

import React from "react";
import { Input } from "@/components/ui/input";

import { usePasswordInput } from "@omergulcicek/password-input";

export default function Home() {
  const {
    inputProps,
    InputWrapper,
    wrapperProps,
  } = usePasswordInput({
    password: {
      icons: {
        show: <span className="text-xs">Show</span>,
        hide: <span className="text-xs">Hide</span>,
      },
    },
  });

  return (
    <InputWrapper {...wrapperProps}>
      <Input {...inputProps} placeholder="Enter your password" />
    </InputWrapper>
  )
}`}</pre>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Custom Text</h2>
              <CustomTextInputWrapper {...customTextPasswordInputWrapperProps}>
                <Input
                  {...customTextPasswordInput}
                  placeholder="Enter your password"
                />
              </CustomTextInputWrapper>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border text-xs">
                <pre className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">{`"use client"

import React from "react";
import { House, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

import { usePasswordInput } from "@omergulcicek/password-input";

export default function Home() {
  const {
    inputProps,
    InputWrapper,
    wrapperProps,
  } = usePasswordInput({
    password: {
      icons: {
        show: <House className="size-4" />,
        hide: <Star className="size-4" />,
      },
    },
  });

  return (
    <InputWrapper {...wrapperProps}>
      <Input {...inputProps} placeholder="Enter your password" />
    </InputWrapper>
  )
}`}</pre>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Custom Icon</h2>
              <CustomIconInputWrapper {...customIconPasswordInputWrapperProps}>
                <Input
                  {...customIconPasswordInput}
                  placeholder="Enter your password"
                />
              </CustomIconInputWrapper>
            </div>
          </section>
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-20">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/omergulcicek"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              @omergulcicek
            </a>
          </p>
          <p className="mt-1">
            <a
              href="https://github.com/omergulcicek/password-input"
              className="text-blue-600 hover:text-blue-700"
            >
              View on GitHub →
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
