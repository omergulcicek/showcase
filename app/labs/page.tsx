import { ProjectCard } from "@/components/project-card";

export const metadata = {
  title: "The ViraStack Laboratory",
  description:
    "We are expanding the ViraStack ecosystem with high-discipline developer tools designed to automate complexity.",
};

export default function LabsPage() {
  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-8 px-12 md:px-16 pb-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black">The ViraStack Laboratory</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          We are expanding the ViraStack ecosystem with high-discipline developer
          tools designed to automate complexity. From intelligent CLI workflows
          and resilient error-handling architectures to unified configuration
          standards, we are building the next generation of DX-focused
          infrastructure for uncompromising software quality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <ProjectCard
          project={{
            name: "CLI",
            description:
              "A powerful command-line interface designed to scaffold, manage, and scale ViraStack-native architectures with industry-standard efficiency.",
            repo: "https://github.com/virastack",
            bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
          }}
        />
        <ProjectCard
          project={{
            name: "Config",
            description:
              "A centralized, high-discipline configuration suite for Prettier and ESLint, ensuring absolute code consistency and architectural integrity across every project.",
            repo: "https://github.com/virastack",
            bgColor: "bg-teal-50 dark:bg-teal-500/10",
          }}
        />
        <ProjectCard
          project={{
            name: "Error Guard",
            description:
              "Advanced error-handling protocols and production-grade monitoring tools to ensure zero-friction recovery in modern React environments.",
            repo: "https://github.com/virastack",
            bgColor: "bg-pink-50 dark:bg-pink-500/10",
          }}
        />
      </div>
    </main>
  );
}
