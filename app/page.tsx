import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function HomePage() {
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
                  className="drop-shadow-lg"
                  priority
                  quality={100}
                  unoptimized
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div className="flex flex-col items-start justify-center col-span-2">
          <h1 className="text-2xl md:text-4xl lg:text-8xl font-black mb-4">
            VIRASTACK
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold">
            High-performance Frontend architectures and developer-centric tools
            for modern software standards.
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
