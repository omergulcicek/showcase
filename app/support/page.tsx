import { ProjectCard } from "@/components/project-card";

export const metadata = {
  title: "Support",
  description: "Support ViraStack projects by starring them on GitHub.",
};

export const projects = [
  {
    name: "Next.js Boilerplate",
    description:
      "Production-ready Next.js 16+ starter template built with Tailwind CSS 4 and TypeScript.",
    repo: "https://github.com/virastack/nextjs-boilerplate",
    bgColor: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    name: "AI Rules",
    description:
      "AI-native architecture kit and high-discipline protocols for modern React applications.",
    repo: "https://github.com/virastack/ai-rules",
    bgColor: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
  },
  {
    name: "Password Toggle",
    description:
      "Fully accessible and highly customizable password visibility hook for React.",
    repo: "https://github.com/virastack/password-toggle",
    bgColor: "bg-red-50 dark:bg-red-500/10",
  },
  {
    name: "Input Mask",
    description:
      "Lightweight, zero-dependency input masking library optimized for React Hook Form.",
    repo: "https://github.com/virastack/input-mask",
    bgColor: "bg-green-50 dark:bg-green-500/10",
  },
  {
    name: "Modern Web in 3 Minutes",
    description: "Master modern web development standards in just 3 minutes.",
    repo: "https://github.com/virastack/modern-web-in-3-minutes",
    bgColor: "bg-amber-50 dark:bg-amber-500/10",
  },
];

export default function SupportPage() {
  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-8 px-12 md:px-16 pb-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-black">Support</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          The growth and reach of ViraStack projects rely directly on the
          strength of our community. As we are at the beginning of this journey,
          the most effective way to support this ecosystem is to increase our
          visibility by starring our projects on GitHub. ⭐
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Every star you provide is our greatest source of motivation to ensure
          the sustainability of these open-source projects and to develop new
          features.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Thank you for helping us grow ViraStack.
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
