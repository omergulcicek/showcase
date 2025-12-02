"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePasswordInput } from "@omergulcicek/password-input";

import { Github, GitBranch, Star, Home, Code, Copy, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HomeApp() {
  return (
    <div>
      <HeroSection />
      <FormExample />
      <Footer />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-5 mt-40">
          <h1 className="text-3xl font-semibold">
            Customizable Password Input Hook
          </h1>
          <p className="max-w-4xl text-center text-muted-foreground">
            Lightweight,{" "}
            <span className="font-medium text-primary">
              TypeScript-first React hook
            </span>{" "}
            for adding a{" "}
            <span className="font-medium text-primary">
              customizable show/hide toggle
            </span>{" "}
            to password fields. It supports{" "}
            <span className="font-medium text-primary">custom icons</span> (any
            React component) and flexible{" "}
            <span className="font-medium text-primary">
              class-based styling
            </span>
            , perfect for Tailwind integration.
          </p>
          <div className="flex gap-2">
            <Link
              href="https://github.com/omergulcicek/password-input"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Github className="w-4 h-4" />
                <span>Star on Github</span>
              </Button>
            </Link>
            <Link
              href="https://www.npmjs.com/package/@omergulcicek/password-input"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost">
                <GitBranch className="w-4 h-4" />
                <span>npm Package</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormExample = () => {
  const { inputProps, InputWrapper, wrapperProps } = usePasswordInput({
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

  return (
    <section>
      <div className="container mx-auto py-40">
        <div className="max-w-xs mx-auto relative">
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Default</Label>
            <InputWrapper {...wrapperProps}>
              <Input {...inputProps} id="password" value="29051453" />
            </InputWrapper>
          </div>

          <figure className="absolute -right-20 top-10 select-none">
            <ArrowIcon className="size-14 -scale-x-100" />
            <figcaption className="ml-5">Click it</figcaption>
          </figure>

          <div className="flex flex-col gap-2 mt-24">
            <Label htmlFor="password2">Custom Text</Label>
            <CustomTextInputWrapper {...customTextPasswordInputWrapperProps}>
              <Input {...customTextPasswordInput} id="password2" />
            </CustomTextInputWrapper>
          </div>

          <div className="flex flex-col gap-2 mt-24">
            <Label htmlFor="password3">Custom Icon</Label>
            <CustomIconInputWrapper {...customIconPasswordInputWrapperProps}>
              <Input {...customIconPasswordInput} id="password3" />
            </CustomIconInputWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="144"
      height="141"
      viewBox="0 0 144 141"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M129.189 0.0490494C128.744 0.119441 126.422 0.377545 124.03 0.635648C114.719 1.6446 109.23 2.4893 108.058 3.09936C107.119 3.56864 106.674 4.34295 106.674 5.44576C106.674 6.71281 107.424 7.51058 109.043 7.97986C110.403 8.37875 110.825 8.42567 118.87 9.52847C121.778 9.92736 124.288 10.3028 124.475 10.3732C124.663 10.4436 122.951 11.1006 120.676 11.8749C110.028 15.4414 100.412 20.7677 91.7339 27.9242C88.38 30.7164 81.6957 37.4271 79.2096 40.5009C73.8387 47.2116 69.6874 54.8139 66.5681 63.7302C65.9348 65.4665 65.3484 66.8978 65.2546 66.8978C65.1374 66.8978 63.7771 66.7336 62.2291 66.5693C52.9649 65.5134 43.1847 68.1649 34.1316 74.2186C24.7735 80.46 18.5349 87.7338 10.5371 101.742C2.53943 115.726 -1.0959 127.482 0.287874 135.014C0.89767 138.463 2.0469 140.035 3.97011 140.082C5.28352 140.105 5.37733 139.659 4.20465 139.049C3.05541 138.463 2.6567 137.9 2.32835 136.281C0.616228 128.021 6.24512 113.028 17.4325 96.1104C23.2725 87.241 28.362 81.9147 35.5622 77.1046C43.8649 71.5437 52.7069 69.033 61.1737 69.8308C64.9967 70.1828 64.6917 69.9247 64.1992 72.4822C62.2525 82.5013 63.8005 92.6378 67.9753 97.354C73.1116 103.079 81.9771 102 85.0027 95.2657C86.3395 92.2858 86.3864 87.7103 85.1434 83.9796C83.1498 78.0901 80.007 73.8197 75.4335 70.8163C73.8152 69.7604 70.4848 68.1883 69.875 68.1883C69.359 68.1883 69.4294 67.6487 70.2268 65.3257C72.3377 59.2486 75.457 52.7021 78.4122 48.244C83.2436 40.9232 91.4524 32.5701 99.1687 27.103C105.806 22.4102 113.241 18.5386 120.512 16.0045C123.772 14.8548 129.87 13.1889 130.081 13.3766C130.128 13.447 129.541 14.362 128.791 15.4414C124.78 21.0258 122.716 26.0706 122.388 30.998C122.224 33.7198 122.341 34.588 122.88 34.2595C122.998 34.1891 123.678 32.969 124.405 31.5611C126.281 27.8069 131.722 20.6738 139.579 11.6402C141.127 9.85697 142.652 7.86254 143.027 7.08823C144.552 4.03792 143.52 1.48035 140.377 0.471397C139.439 0.166366 138.102 0.0490408 134.584 0.0255769C132.074 -0.021351 129.635 0.00212153 129.189 0.0490494ZM137.117 4.92955C137.187 5.0234 136.718 5.63346 136.061 6.29045L134.865 7.48712L131.042 6.73627C128.931 6.33739 126.727 5.9385 126.14 5.8681C124.827 5.68039 124.123 5.32843 124.968 5.28151C125.296 5.28151 126.868 5.11725 128.486 4.953C131.3 4.64797 136.812 4.62451 137.117 4.92955ZM71.5168 72.5292C76.2075 74.899 79.4441 78.8175 81.3204 84.355C83.6189 91.1361 81.2266 96.8378 76.0433 96.8847C73.3227 96.9082 70.9773 95.2188 69.5936 92.2389C68.2802 89.4232 67.6938 86.5606 67.5765 82.1259C67.4593 78.3248 67.6 76.4242 68.2333 72.7403L68.4912 71.2856L69.359 71.5906C69.8515 71.7548 70.8132 72.1772 71.5168 72.5292Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto pb-20">
        <p className="text-center">
          Made with ❤️ by{" "}
          <Link
            href="https://omergulcicek.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            @omergulcicek
          </Link>
        </p>
      </div>
    </footer>
  );
};

export function Example() {
  const [copiedStates, setCopiedStates] = useState<{
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
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="flex flex-col items-center justify-center gap-6">
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
                <Code className="w-6 h-6" />
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
                <Code className="w-6 h-6" />
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
                <Code className="w-6 h-6" />
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
