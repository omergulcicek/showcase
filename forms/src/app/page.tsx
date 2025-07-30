"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { Balancer } from "react-wrap-balancer";
import { useHookFormMask } from "use-mask-input";

import { useFormFields } from "@omergulcicek/forms";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Code, Github, Copy, Check, GitBranch } from "lucide-react";

export default function Home() {
  const [copiedStates, setCopiedStates] = useState<{
    [key: string]: boolean;
  }>({});

  const form = useForm();
  const registerWithMask = useHookFormMask(form.register);

  const {
    cardNumber,
    maskedCard,
    paymentCard,
    expiryDate,
    cvv,
    tckn,
    tckn2,
    tckn3,
    phone,
    maskedPhone,
    maskedPhone2,
    email,
    url,
    alpha,
    password,
  } = useFormFields({
    fields: [
      { name: "cardNumber", type: "cardNumber" },
      { name: "maskedCard", type: "cardNumber" },
      { name: "paymentCard", type: "cardNumber" },
      { name: "expiryDate", type: "expiryDate" },
      { name: "cvv", type: "cvv" },
      { name: "tckn", type: "tckn" },
      { name: "tckn2", type: "tckn" },
      { name: "tckn3", type: "tckn" },
      { name: "phone", type: "phone" },
      { name: "maskedPhone", type: "phone" },
      { name: "maskedPhone2", type: "phone" },
      { name: "email", type: "email" },
      { name: "url", type: "url" },
      { name: "alpha", type: "alpha" },
      { name: "password", type: "password" },
    ],
    registerWithMask,
    form,
  });

  const handleSubmit = (data: Record<string, unknown>) => {
    console.log("Form Data:", data);
  };

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
          <Balancer
            as="h1"
            className="text-2xl lg:text-5xl font-bold text-center text-black dark:text-white"
          >
            usePasswordInput
          </Balancer>

          <Balancer as="div">
            <p className="text-center text-base px-3 max-w-3xl">
              <strong>React Hook Form</strong> utilities with{" "}
              <strong>TypeScript</strong> support for smart input masking and
              validation of fields like card number, expiry date, CVV, TCKN,
              phone, email, URL, password, and more.
            </p>
          </Balancer>

          <div className="flex items-center justify-center gap-4">
            <Button asChild>
              <Link
                href="https://github.com/omergulcicek/forms"
                target="_blank"
              >
                <Github className="w-4 h-4" />
                <span>Star on Github</span>
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link
                href="https://www.npmjs.com/package/@omergulcicek/forms"
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
                npm i @omergulcicek/forms
              </code>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors cursor-pointer"
                onClick={() =>
                  copyToClipboard("npm i @omergulcicek/forms", "hero-install")
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
        </div>

        <div className="grid lg:grid-cols-3 gap-4 my-20">
          <Card className="border-t-4 border-t-red-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-red-600 text-base flex items-center gap-2">
                <span>❌</span> Before
              </CardTitle>
              <CardDescription className="text-sm">
                Standard HTML inputs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="plain-card" className="text-xs font-medium">
                  Card Number
                </Label>
                <input
                  id="plain-card"
                  type="text"
                  placeholder="**** **** **** ****"
                  className="w-full h-9 px-3 border border-gray-200"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="plain-phone" className="text-xs font-medium">
                  Phone
                </Label>
                <input
                  id="plain-phone"
                  type="text"
                  placeholder="5551234567"
                  className="w-full h-9 px-3 border border-gray-200"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="plain-tckn" className="text-xs font-medium">
                  Turkish ID
                </Label>
                <input
                  id="plain-tckn"
                  type="text"
                  placeholder="12345678950"
                  className="w-full h-9 px-3 border border-gray-200"
                />
              </div>
              <div className="text-xs text-gray-500 space-y-1 pt-2">
                <div>❌ No masking</div>
                <div>❌ No validation</div>
                <div>❌ No formatting</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-orange-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-orange-600 text-base flex items-center gap-2">
                <span>⚡</span> HTML + Masking
              </CardTitle>
              <CardDescription className="text-sm">
                With @omergulcicek/forms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <Label htmlFor="masked-card" className="text-xs font-medium">
                    Card Number
                  </Label>
                  <input
                    {...maskedCard}
                    id="masked-card"
                    placeholder="**** **** **** ****"
                    className="w-full h-9 px-3 border border-gray-200"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="masked-phone" className="text-xs font-medium">
                    Phone
                  </Label>
                  <input
                    {...maskedPhone}
                    id="masked-phone"
                    placeholder="(5xx) xxx xx xx"
                    className="w-full h-9 px-3 border border-gray-200"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="masked-tckn" className="text-xs font-medium">
                    Turkish ID
                  </Label>
                  <input
                    {...tckn2}
                    id="masked-tckn"
                    placeholder="12345678950"
                    className="w-full h-9 px-3 border border-gray-200"
                  />
                </div>
              </form>
              <div className="text-xs text-green-600 space-y-1 pt-5">
                <div>✅ Auto masking</div>
                <div>✅ Keyboard validation</div>
                <div>✅ Regex support</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-green-600 text-base flex items-center gap-2">
                <span>🎨</span> shadcn/ui + Masking
              </CardTitle>
              <CardDescription className="text-sm">
                Perfect experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <Label htmlFor="shadcn-card" className="text-xs font-medium">
                    Card Number
                  </Label>
                  <Input
                    {...cardNumber}
                    id="shadcn-card"
                    placeholder="**** **** **** ****"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="shadcn-phone" className="text-xs font-medium">
                    Phone
                  </Label>
                  <Input
                    {...maskedPhone2}
                    id="shadcn-phone"
                    placeholder="(5xx) xxx xx xx"
                    className="h-9 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="shadcn-tckn" className="text-xs font-medium">
                    Turkish ID
                  </Label>
                  <Input
                    {...tckn3}
                    id="shadcn-tckn"
                    placeholder="12345678950"
                    className="h-9 text-sm"
                  />
                </div>
              </form>
              <div className="text-xs text-green-600 space-y-1 pt-5">
                <div>✅ All features</div>
                <div>✅ Modern design</div>
                <div>✅ Accessible</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl flex items-center gap-2">
              <span>🔥</span> All Input Types
            </CardTitle>
            <CardDescription>Complete field collection</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6 grid md:grid-cols-9 gap-x-10"
            >
              {/* Payment Information */}
              <div className="col-span-9 md:col-span-3">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <span>💳</span> Payment Information
                </h3>
                <div className="grid gap-4">
                  <div className="space-y-1">
                    <Label
                      htmlFor="payment-card"
                      className="text-xs font-medium"
                    >
                      Card Number
                    </Label>
                    <Input
                      {...paymentCard}
                      id="payment-card"
                      placeholder="**** **** **** ****"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="expiry" className="text-xs font-medium">
                        Expiry Date
                      </Label>
                      <Input
                        {...expiryDate}
                        id="expiry"
                        placeholder="MM/YY"
                        className="h-9 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="cvv" className="text-xs font-medium">
                        CVV
                      </Label>
                      <Input {...cvv} id="cvv" placeholder="***" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="my-2 font-medium">Form fields values</h4>
                    <p className="text-xs text-gray-500">
                      <span>Card Number: {paymentCard.value}</span>
                      <br />
                      <span>Card Number Masked: {paymentCard.maskedValue}</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      <span>Expiry Date: {expiryDate.value}</span>
                      <br />
                      <span>Expiry Date Masked: {expiryDate.maskedValue}</span>
                    </p>
                    <p className="text-xs text-gray-500">
                      <span>CVV: {cvv.value}</span>
                      <br />
                      <span>CVV Masked: {cvv.maskedValue}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="col-span-9 md:col-span-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <span>👤</span> Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="name-field" className="text-xs font-medium">
                      Name (Letters Only)
                    </Label>
                    <Input
                      {...alpha}
                      id="name-field"
                      placeholder="Ömer Gülçiçek"
                      className="h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="turkish-id" className="text-xs font-medium">
                      🇹🇷 Turkish ID
                    </Label>
                    <Input
                      {...tckn}
                      id="turkish-id"
                      placeholder="12345678950"
                      className="h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="mobile" className="text-xs font-medium">
                      Phone
                    </Label>
                    <Input
                      {...phone}
                      id="mobile"
                      placeholder="(5xx) xxx xx xx"
                      className="h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label
                      htmlFor="email-field"
                      className="text-xs font-medium"
                    >
                      Email
                    </Label>
                    <Input
                      {...email}
                      id="email-field"
                      placeholder="email@example.com"
                      className="h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="website" className="text-xs font-medium">
                      Website
                    </Label>
                    <Input
                      {...url}
                      id="website"
                      placeholder="https://example.com"
                      className="h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label
                      htmlFor="password-field"
                      className="text-xs font-medium"
                    >
                      Password
                    </Label>
                    <Input
                      {...password}
                      id="password-field"
                      type="password"
                      placeholder="••••••••"
                      className="h-9 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-8 flex justify-center">
                <Button type="submit">Submit Form</Button>
              </div>
            </form>
          </CardContent>
        </Card>

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
