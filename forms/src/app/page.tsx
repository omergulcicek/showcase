"use client";

import { useForm } from "react-hook-form";
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

export default function Home() {
  const form = useForm();
  const registerWithMask = useHookFormMask(form.register);

  const {
    cardNumber,
    expiryDate,
    cvv,
    tckn,
    phone,
    email,
    url,
    alpha,
    password,
    text,
  } = useFormFields({
    fields: [
      { name: "cardNumber", type: "cardNumber" },
      { name: "expiryDate", type: "expiryDate" },
      { name: "cvv", type: "cvv" },
      { name: "tckn", type: "tckn" },
      { name: "phone", type: "phone" },
      { name: "email", type: "email" },
      { name: "url", type: "url" },
      { name: "alpha", type: "alpha" },
      { name: "password", type: "password" },
      { name: "text", type: "text" },
    ],
    registerWithMask,
    form,
  });

  const handleSubmit = (data: Record<string, unknown>) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-6">
            <span className="text-2xl">🧩</span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              @omergulcicek/forms
            </span>
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-4">
            Advanced Form Fields
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Smart masking and validation for React Hook Form with TypeScript
            support
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-200">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-medium border border-green-200">
              React Hook Form
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium border border-purple-200">
              shadcn/ui
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-8">
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
                    {...cardNumber}
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
                    {...phone}
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
                    {...tckn}
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
                    className="h-9 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="shadcn-phone" className="text-xs font-medium">
                    Phone
                  </Label>
                  <Input
                    {...phone}
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
                    {...tckn}
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
                      {...cardNumber}
                      id="payment-card"
                      placeholder="**** **** **** ****"
                      className="h-9 text-sm"
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
                      <span>Card Number: {cardNumber.value}</span>
                      <br />
                      <span>Card Number Masked: {cardNumber.maskedValue}</span>
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
                  <div className="space-y-1">
                    <Label htmlFor="details" className="text-xs font-medium">
                      Details
                    </Label>
                    <Input
                      {...details}
                      id="details"
                      placeholder="Additional information..."
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

        <div className="flex flex-col gap-8 mb-8">
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <span>📦</span> Installation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Quick Start</h4>
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border">
                  <code className="text-xs text-slate-700 dark:text-slate-300">
                    npm install @omergulcicek/forms
                  </code>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Peer Dependencies</h4>
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border">
                  <code className="text-xs text-slate-700 dark:text-slate-300">
                    npm install react-hook-form use-mask-input
                  </code>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Required for full functionality
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="space-y-1">
                  <div>✅ Keyboard validation</div>
                  <div>✅ Smart masking</div>
                  <div>✅ TypeScript support</div>
                </div>
                <div className="space-y-1">
                  <div>✅ shadcn/ui ready</div>
                  <div>✅ 10+ input types</div>
                  <div>✅ Easy integration</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <span>💻</span> Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border text-xs">
                <pre className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">{`"use client"

import { useForm } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"
import { useFormFields } from "@omergulcicek/forms"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function PaymentForm() {
  const form = useForm()
  const registerWithMask = useHookFormMask(form.register)

  const { cardNumber, expiryDate, cvv, phone } = useFormFields({
    fields: [
      { name: "cardNumber", type: "cardNumber" },
      { name: "expiryDate", type: "expiryDate" },
      { name: "cvv", type: "cvv" },
      { name: "phone", type: "phone" }
    ],
    registerWithMask,
    form
  })

  const handleSubmit = (data: Record<string, unknown>) => {
    console.log("Form Data:", data)
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
      <div>
        <Label>Card Number</Label>
        <Input {...cardNumber} placeholder="**** **** **** ****" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Expiry</Label>
          <Input {...expiryDate} placeholder="MM/YY" />
        </div>
        <div>
          <Label>CVV</Label>
          <Input {...cvv} placeholder="***" />
        </div>
      </div>
      
      <div>
        <Label>Phone</Label>
        <Input {...phone} placeholder="(5xx) xxx xx xx" />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}`}</pre>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
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
              href="https://github.com/omergulcicek/forms"
              className="text-blue-600 hover:text-blue-700"
            >
              View on GitHub →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
