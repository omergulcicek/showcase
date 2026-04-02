import { setRequestLocale, getTranslations } from "next-intl/server";
import { UserCard } from "@/components/user-card";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params?.locale || "en";
  const t = await getTranslations({ locale, namespace: "Maintainers" });
  return {
    title: t("title"),
    description: t("description1"),
  };
}

export default async function MaintainersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Maintainers");

  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-8 px-12 md:px-16 pb-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black">{t("title")}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {t("description1")}
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {t("description2")}
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {t("description3")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <UserCard
          name="Ömer Gülçiçek"
          description={t("roles.founder")}
          image="/profile.jpg"
          links={{
            website: "https://omergulcicek.com",
            twitter: "https://x.com/omergulcicek",
            github: "https://github.com/omergulcicek",
          }}
        />
      </div>
    </main>
  );
}
