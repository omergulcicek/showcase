import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Github } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { UserCard } from "@/components/user-card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Home");
  const tMaintainers = await getTranslations("Maintainers");

  return (
    <main className="flex min-h-[calc(100vh-160px)] max-w-6xl 2xl:mx-auto flex-col gap-8 xl:gap-24 px-12 md:px-16 pb-8">
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
        <div className="flex flex-col items-start justify-center col-span-2 gap-4">
          <h1 className="text-2xl md:text-4xl lg:text-8xl font-extrabold text-shadow-lg">
            ViraStack
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-normal leading-relaxed max-w-prose">
            {t("description")}
          </p>
          <Button asChild>
            <a
              href="https://github.com/virastack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              {t("ctaGithub")}
            </a>
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-4 mt-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          {t("openSourceLibraries")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 mt-8">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          {tMaintainers("title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <UserCard
            name="Ömer Gülçiçek"
            description={tMaintainers("roles.founder")}
            image="/profile.jpg"
            links={{
              website: "https://omergulcicek.com",
              twitter: "https://x.com/omergulcicek",
              github: "https://github.com/omergulcicek",
            }}
          />
        </div>
      </section>
    </main>
  );
}
