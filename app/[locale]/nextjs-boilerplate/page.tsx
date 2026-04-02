import { setRequestLocale } from "next-intl/server";
import { Dashboard } from "@/components/ui/dashboard/Dashboard";
import { FeaturesList } from "@/components/ui/features-list/FeaturesList";
import { Showcase } from "@/components/ui/showcase/Showcase";

export const metadata = {
  title: "Next.js Boilerplate",
};

export default async function NextjsBoilerplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-[calc(100vh-160px)] 2xl:max-w-6xl 2xl:mx-auto flex-col gap-8 pb-8">
      <Dashboard />
      <FeaturesList />
      <Showcase />
    </main>
  );
}
