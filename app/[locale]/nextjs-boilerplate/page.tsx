import { setRequestLocale } from "next-intl/server";
import { Dashboard } from "@/components/ui/dashboard/Dashboard";
import { FeaturesList } from "@/components/ui/features-list/FeaturesList";
import { Showcase } from "@/components/ui/showcase/Showcase";

export const metadata = {
  title: "Next.js Boilerplate",
};

export default async function NextjsBoilerplatePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-8 px-12 md:px-16 pb-8">
      <Dashboard />
      <FeaturesList />
      <Showcase />
    </main>
  );
}
