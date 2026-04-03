import type { ReactNode } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ViraStackProjectHeading } from "@/components/virastack-project-heading";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params?.locale || "en";
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const primaryStrong = (chunks: ReactNode) => (
  <strong className="text-primary">{chunks}</strong>
);

const linkGithub = (chunks: ReactNode) => (
  <a
    href="https://github.com/virastack"
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground underline underline-offset-4 mx-1"
  >
    {chunks}
  </a>
);

const linkCommunity = (chunks: ReactNode) => (
  <Link
    href="/community"
    className="text-foreground underline underline-offset-4 mx-1"
  >
    {chunks}
  </Link>
);

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("About");

  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-16 px-8 md:px-16 pb-24 2xl:max-w-6xl 2xl:mx-auto">
      <header className="flex flex-col gap-4 pt-10">
        <ViraStackProjectHeading
          projectName={t("projectName")}
          accentClassName="italic font-normal"
        />
        <p className="text-xl text-muted-foreground leading-relaxed">
          {t("intro")}
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight">
          {t("whatIsHeading")}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t("whatIsBody")}
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight">
          {t("principlesHeading")}
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-foreground">
              {t("perfTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("perfBody")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-foreground">
              {t("dxTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("dxBody")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-foreground">
              {t("archTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("archBody")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-foreground">
              {t("aiTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("aiBody")}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold tracking-tight">
          {t("layersHeading")}
        </h2>
        <div className="flex flex-col gap-8">
          <article className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-foreground">
              {t("starterTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("starterBody")}
            </p>
          </article>

          <article className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-foreground">
              {t("helpersTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("helpersBody")}
            </p>
          </article>

          <article className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-foreground">
              {t("roadmapTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.rich("roadmapBody", {
                start: primaryStrong,
                standards: primaryStrong,
                errorguard: primaryStrong,
              })}
            </p>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-4 pt-8 border-t">
        <h2 className="text-2xl font-bold tracking-tight">
          {t("communityHeading")}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t.rich("communityBody", {
            github: linkGithub,
            community: linkCommunity,
          })}
        </p>
      </section>
    </main>
  );
}
