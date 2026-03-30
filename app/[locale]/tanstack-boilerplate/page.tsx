import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata = {
  title: "TanStack Boilerplate",
};

export default function TanStackBoilerplatePage() {
  const project = projects.find((p) => p.name === "TanStack Boilerplate");

  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-8 px-12 md:px-16 pb-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black">TanStack Boilerplate</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          We are actively working on this section. You can find the most
          up-to-date information on our GitHub repository or contribute to the
          process.
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
