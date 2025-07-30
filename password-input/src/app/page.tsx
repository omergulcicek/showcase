"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Code, Github, Copy, Check, GitBranch, Star, Home } from "lucide-react";
import { Input } from "@/components/ui/input";

import { usePasswordInput } from "@omergulcicek/password-input";
import { Balancer } from "react-wrap-balancer";
import { Button } from "@/components/ui/button";

export default function Example() {
  const [copiedStates, setCopiedStates] = React.useState<{
    [key: string]: boolean;
  }>({});

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
        show: <Home className="size-4" />,
        hide: <Star className="size-4" />,
      },
    },
  });

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [key]: true }));

    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }));
    }, 1000);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-48">
        <div className="flex flex-col items-center justify-center gap-6">
          <Balancer
            as="h1"
            className="text-2xl lg:text-5xl font-bold text-center text-black dark:text-white"
          >
            usePasswordInput
          </Balancer>

          <Balancer as="div">
            <p className="text-center text-base px-3 max-w-3xl">
              React hook that enhances <strong>password inputs</strong> with a
              built-in <strong>show/hide toggle</strong> functionality, designed
              for seamless integration and improved user experience.
            </p>
          </Balancer>

          <div className="flex items-center justify-center gap-4">
            <Button asChild>
              <Link
                href="https://github.com/omergulcicek/password-input"
                target="_blank"
              >
                <Github className="w-4 h-4" />
                <span>Star on Github</span>
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link
                href="https://www.npmjs.com/package/@omergulcicek/password-input"
                target="_blank"
              >
                <GitBranch className="w-4 h-4" />
                <span>npm Package</span>
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 relative">
            <div className="relative">
              <code className="text-sm bg-gray-50 pl-3 py-2 pr-12 rounded border font-mono text-gray-900">
                npm i @omergulcicek/password-input
              </code>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors cursor-pointer"
                onClick={() =>
                  copyToClipboard(
                    "npm i @omergulcicek/password-input",
                    "hero-install"
                  )
                }
                title="Copy to clipboard"
              >
                {copiedStates["hero-install"] ? (
                  <Check className="size-4 text-green-600" />
                ) : (
                  <Copy className="size-4 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-20">
            <div className="p-6 rounded-2xl border">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-lavender-700" />
                <h2 className="text-lg font-semibold">Default Example</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <DefaultInputWrapper {...defaultPasswordInputWrapperProps}>
                    <Input
                      {...defaultPasswordInput}
                      placeholder="Enter your password"
                      className="bg-white"
                    />
                  </DefaultInputWrapper>
                  <div className="text-xs text-gray-600 mt-2">
                    Simple password input with show/hide toggle
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border text-xs">
                  <pre className="text-slate-700 whitespace-pre-wrap">{`const {
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
)`}</pre>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-orange-700" />
                <h2 className="text-lg font-semibold">Custom Text Example</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <CustomTextInputWrapper
                    {...customTextPasswordInputWrapperProps}
                  >
                    <Input
                      {...customTextPasswordInput}
                      placeholder="Enter your password"
                      className="bg-white"
                    />
                  </CustomTextInputWrapper>
                  <div className="text-xs text-gray-600 mt-2">
                    Custom show/hide text labels
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border text-xs">
                  <pre className="text-slate-700 whitespace-pre-wrap">{`const {
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
)`}</pre>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-green-700" />
                <h2 className="text-lg font-semibold">Custom Icon Example</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <CustomIconInputWrapper
                    {...customIconPasswordInputWrapperProps}
                  >
                    <Input
                      {...customIconPasswordInput}
                      placeholder="Enter your password"
                      className="bg-white"
                    />
                  </CustomIconInputWrapper>
                  <div className="text-xs text-gray-600 mt-2">
                    Custom eye icons for show/hide
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border text-xs">
                  <pre className="text-slate-700 whitespace-pre-wrap">{`import { Eye, EyeOff } from "lucide-react";

const {
  inputProps,
  InputWrapper,
  wrapperProps,
} = usePasswordInput({
  password: {
    icons: {
      show: <Eye className="size-4" />,
      hide: <EyeOff className="size-4" />,
    },
  },
});

return (
  <InputWrapper {...wrapperProps}>
    <Input {...inputProps} placeholder="Enter your password" />
  </InputWrapper>
)`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="flex justify-center items-center gap-2 py-10">
            <span>A project by</span>

            <Image
              src="/nice-avatar.png"
              alt="Ömer Gülçiçek Avatar"
              width={32}
              height={32}
            />

            <Link
              href="https://omergulcicek.com?utm_source=password-input"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <span className="font-bold hover:underline">Ömer Gülçiçek</span>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
