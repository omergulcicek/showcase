"use client";

import { useTranslations } from "next-intl";

import { AuthForm } from "@/components/ui/auth-form";
import { UserList } from "@/components/ui/user-list";

export function Showcase() {
  const t = useTranslations("NextjsBoilerplate.Showcase");

  return (
    <section className="container w-full max-w-5xl pb-16 px-12 md:px-16">
      <div className="mb-6 space-y-2 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">{t("title")}</h2>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>

      <div className="grid gap-20 md:grid-cols-3">
        <UserList />
        <AuthForm />
      </div>
    </section>
  );
}
