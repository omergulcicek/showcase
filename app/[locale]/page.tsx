import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { AuroraText } from "@/components/ui/aurora-text";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Home");

  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-8 px-12 md:px-16 pb-8">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center col-span-1">
          <CardContainer
            containerClassName="py-0"
            className="py-0"
            rotationFactor={10}
          >
            <CardBody className="h-auto w-auto flex items-center">
              <CardItem translateZ="64">
                <Image
                  src="/virastack.png"
                  alt="ViraStack"
                  width={400}
                  height={400}
                  priority
                  quality={100}
                  unoptimized
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div className="flex flex-col items-start justify-center col-span-2">
          <h1 className="text-2xl md:text-4xl lg:text-8xl font-extrabold mb-4 text-shadow-lg">
            <AuroraText
              colors={["teal-500", "sky-500", "teal-500"].map(
                (p) => `var(--color-${p})`,
              )}
            >
              Vira
            </AuroraText>
            Stack
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-snug">
            {t("description")}
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </main>
  );
}
