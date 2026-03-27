import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Support",
  description: "Support ViraStack projects by starring them on GitHub.",
};

export default function SupportPage() {
  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-8 px-12 md:px-16 pb-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black">Support</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          The growth and reach of ViraStack depend directly on our community.
          The most effective way to help us grow and keep this ecosystem
          sustainable is by starring our projects on GitHub to increase our
          visibility.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Every star given to our upcoming projects serves as a great motivation
          and helps us prioritize future features.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Thank you for building ViraStack with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}
