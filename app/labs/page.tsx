import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata = {
  title: "The ViraStack Laboratory",
  description:
    "We are expanding the ViraStack ecosystem with high-discipline developer tools designed to automate complexity.",
};

export default function LabsPage() {
  const labsProjects = projects.filter((p) => p.status);

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
        {labsProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}
