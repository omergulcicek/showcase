import { setRequestLocale, getTranslations } from "next-intl/server";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params?.locale || "en";
  const t = await getTranslations({ locale, namespace: "TanStackBoilerplate" });
  return {
    title: t("title"),
    description: t("workingOn"),
  };
}

export default async function TanStackBoilerplatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("TanStackBoilerplate");
  const project = projects.find((p) => p.name === "TanStack Boilerplate");

  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-8 px-12 md:px-16 pb-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black">{t("title")}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {t("workingOn")}
        </p>
      </div>

      {project && (
        <div className="max-w-md">
          <ProjectCard project={project} />
        </div>
      )}
    </main>
  );
}
