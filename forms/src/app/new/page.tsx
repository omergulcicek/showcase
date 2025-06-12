"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
import { ArrowRight, CheckCircle, CircleX } from "lucide-react";

import { useFormFields } from "@omergulcicek/forms";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/shine-border";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const form = useForm();
  const registerWithMask = useHookFormMask(form.register);

  const { cardNumber } = useFormFields({
    fields: [{ name: "cardNumber", type: "cardNumber" }],
    registerWithMask,
    form,
  });

  return (
    <>
      <main>
        <section className="flex flex-col gap-20 mt-32 lg:mt-32">
          <div className="container mx-auto max-w-screen-sm flex flex-col items-center justify-center gap-20">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <Badge variant="secondary">v1.2.0</Badge>
              </div>

              <h1 className="text-3xl font-bold tracking-tighter md:text-3xl lg:text-5xl">
                @omergulcicek/<AuroraText>forms</AuroraText>
              </h1>

              <p className="text-muted-foreground text-center">
                Smart masking and validation for React Hook Form with TypeScript
                support.
              </p>
            </div>
          </div>

          <div className="container mx-auto max-w-screen-lg flex flex-col gap-20">
            <div className="text-muted-foreground text-center text-xl">
              Try typing in both inputs to see the difference.
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-11 gap-4">
              <article className="col-span-5 p-4 rounded-xl border flex flex-col justify-between gap-5 border-border">
                <div className="flex flex-col gap-6">
                  <h2 className="font-medium">Plain HTML Input</h2>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="before-card-number">Card Number</label>
                    <input
                      id="before-card-number"
                      type="number"
                      placeholder="**** **** **** ****"
                      className="w-full border"
                    />
                  </div>
                </div>

                <ul className="flex flex-col gap-2 text-green-500 text-sm">
                  <li className="flex items-center gap-2">
                    <CircleX className="w-4 h-4" />
                    <span>No masking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleX className="w-4 h-4" />
                    <span>No formatting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleX className="w-4 h-4" />
                    <span>No validation</span>
                  </li>
                </ul>
              </article>
              <div className="hidden lg:flex items-center justify-center col-span-1">
                <ArrowRight />
              </div>
              <article className="col-span-5">
                <Card className="relative overflow-hidden">
                  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                  <CardHeader>
                    <CardTitle>The Perfect Match (with shadcn/ui)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        type="number"
                        placeholder="**** **** **** ****"
                        {...cardNumber}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <ul className="flex flex-col gap-2 text-green-500 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Auto-formatted</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Validated</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Styled for better UX</span>
                      </li>
                    </ul>
                  </CardFooter>
                </Card>
              </article>
            </div>
          </div>

          <div className="container mx-auto max-w-screen-sm flex flex-col items-center justify-center gap-20">
            <Terminal className="w-full max-w-screen-sm">
              <TypingAnimation>
                &gt; npm install react-hook-form use-mask-input
              </TypingAnimation>

              <TypingAnimation delay={3000} className="text-blue-500">
                &gt; npm install @omergulcicek/forms
              </TypingAnimation>

              <AnimatedSpan delay={5000} className="text-green-500 mt-2">
                <span>✔ Installing dependencies.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5500} className="text-green-500">
                <span>✔ Added 1 package</span>
              </AnimatedSpan>

              <AnimatedSpan delay={6000} className="text-muted-foreground mt-2">
                🎉 You&apos;re all set — smart, validated forms are ready to
                build!
              </AnimatedSpan>
            </Terminal>
          </div>
        </section>
      </main>
    </>
  );
}
