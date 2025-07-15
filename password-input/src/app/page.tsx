"use client";

import React from "react";
import Image from "next/image";
import {
  Eye,
  EyeOff,
  Code,
  Package,
  Zap,
  Shield,
  Github,
  ExternalLink,
  Star,
  User,
  Globe,
  FileText,
  Type,
  Palette,
  Copy,
  Terminal,
} from "lucide-react";
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
        show: <Eye className="size-4" />,
        hide: <EyeOff className="size-4" />,
      },
    },
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <main className="container mx-auto px-4 py-8">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Quick Start - Soft mint */}
          <div className="order-1 lg:col-span-3 p-6 bg-gradient-to-br from-mint-50 to-teal-100 rounded-2xl border">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-mint-700" />
              <h2 className="text-xl font-semibold">Quick Start</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-mint-800">
                    Install Package
                  </p>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "npm install @omergulcicek/password-input"
                      )
                    }
                    className="p-1 hover:bg-mint-100 rounded transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-4 h-4 text-mint-600" />
                  </button>
                </div>
                <code className="text-sm bg-white px-3 py-2 rounded border font-mono text-mint-900 block">
                  npm install @omergulcicek/password-input
                </code>
              </div>
              <div className="p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-teal-800">
                    Import Hook
                  </p>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "npm install @omergulcicek/password-input"
                      )
                    }
                    className="p-1 hover:bg-mint-100 rounded transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-4 h-4 text-mint-600" />
                  </button>
                </div>
                <code className="text-sm bg-white px-3 py-2 rounded border font-mono text-teal-900 block">
                  import {`{ usePasswordInput }`} from
                  &quot;@omergulcicek/password-input&quot;
                </code>
              </div>
            </div>
          </div>

          {/* Default Example - Half width */}
          <div className="order-1 lg:col-span-3 p-6 bg-gradient-to-br from-lavender-50 to-indigo-100 rounded-2xl border">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-lavender-700" />
              <h2 className="text-xl font-semibold">Default Example</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Output</h3>
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

          {/* Custom Text Example - Half width */}
          <div className="order-2 lg:col-span-3 p-6 bg-gradient-to-br from-peach-50 to-orange-100 rounded-2xl border">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-orange-700" />
              <h2 className="text-xl font-semibold">Custom Text Example</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Output</h3>
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

          {/* Custom Icon Example - Half width */}
          <div className="order-2 lg:col-span-3 p-6 bg-gradient-to-br from-sage-50 to-green-100 rounded-2xl border">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-green-700" />
              <h2 className="text-xl font-semibold">Custom Icon Example</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Output</h3>
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

          {/* Features - Soft rose */}
          <div className="order-3 lg:col-span-2 p-6 bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl border">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-pink-700" />
              <h2 className="text-xl font-semibold">Features</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <Zap className="w-4 h-4 text-pink-600" />
                <div>
                  <p className="text-sm font-medium">Ultra Lightweight</p>
                  <p className="text-xs text-gray-600">
                    314B minified, 207B gzipped
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <Type className="w-4 h-4 text-pink-600" />
                <div>
                  <p className="text-sm font-medium">TypeScript Support</p>
                  <p className="text-xs text-gray-600">Full type safety</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <Palette className="w-4 h-4 text-pink-600" />
                <div>
                  <p className="text-sm font-medium">Customizable Icons</p>
                  <p className="text-xs text-gray-600">Use any icon library</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <Shield className="w-4 h-4 text-pink-600" />
                <div>
                  <p className="text-sm font-medium">Zero Dependencies</p>
                  <p className="text-xs text-gray-600">
                    No external dependencies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects - Soft emerald */}
          <div className="order-3 lg:col-span-2 p-6 bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl border">
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-6 h-6 text-green-700" />
              <h2 className="text-xl font-semibold">Other Projects</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <FileText className="w-5 h-5 text-emerald-700" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Forms Package</p>
                  <p className="text-xs text-gray-600">
                    Smart form masking and validation
                  </p>
                </div>
                <a
                  href="https://github.com/omergulcicek/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <Code className="w-5 h-5 text-emerald-700" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Next.js Boilerplate</p>
                  <p className="text-xs text-gray-600">
                    Modern Next.js 15 boilerplate with TypeScript & Tailwind CSS
                  </p>
                </div>
                <a
                  href="https://github.com/omergulcicek/nextjs-boilerplate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Project Info - Soft blue (boilerplate style) */}
          <div className="order-3 lg:col-span-2 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-indigo-700" />
              <h2 className="text-xl font-semibold">Project Info</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/nice-avatar.png"
                    alt="Ömer Gülçiçek"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Ömer Gülçiçek</p>
                  <p className="text-xs text-gray-600">Author</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <Shield className="w-5 h-5 text-blue-700" />
                <div>
                  <p className="text-sm font-medium">License</p>
                  <p className="text-xs text-gray-600">MIT</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <Globe className="w-5 h-5 text-blue-700" />
                <div>
                  <p className="text-sm font-medium">Personal Website</p>
                  <a
                    href="https://omergulcicek.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700"
                  >
                    omergulcicek.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                <Github className="w-5 h-5 text-blue-700" />
                <div>
                  <p className="text-sm font-medium">GitHub</p>
                  <a
                    href="https://github.com/omergulcicek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
