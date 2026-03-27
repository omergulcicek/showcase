export type Project = {
  name: string;
  description: string;
  url: string;
  repo?: string;
  color: string;
  bgColor: string;
  textColor?: string;
  status?: "In Dev" | "Research" | "Coming Soon";
};

export const projects: Project[] = [
  {
    name: "Next.js Boilerplate",
    description:
      "Production-ready Next.js 16+ starter template built with Tailwind CSS 4 and TypeScript.",
    url: "/nextjs-boilerplate",
    repo: "https://github.com/virastack/nextjs-boilerplate",
    color: "bg-sky-500",
    bgColor: "bg-sky-50 dark:bg-sky-500/10",
    textColor: "text-sky-500",
  },
  {
    name: "AI Rules",
    description:
      "AI-native architecture kit and high-discipline protocols for modern React applications.",
    url: "/ai-rules",
    repo: "https://github.com/virastack/ai-rules",
    color: "bg-fuchsia-500",
    bgColor: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
    textColor: "text-fuchsia-500",
  },
  {
    name: "Input Mask",
    description:
      "Lightweight, zero-dependency input masking library optimized for React Hook Form.",
    url: "/input-mask",
    repo: "https://github.com/virastack/input-mask",
    color: "bg-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
    textColor: "text-indigo-500",
  },
  {
    name: "Password Toggle",
    description:
      "Fully accessible and highly customizable password visibility hook for React.",
    url: "/password-toggle",
    repo: "https://github.com/virastack/password-toggle",
    color: "bg-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-500/10",
    textColor: "text-rose-500",
  },
  {
    name: "Modern Web in 3 Minutes",
    description: "Master modern web development standards in just 3 minutes.",
    url: "/modern-web-in-3-minutes",
    repo: "https://github.com/virastack/modern-web-in-3-minutes",
    color: "bg-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-500/10",
    textColor: "text-amber-500",
  },
  {
    name: "TanStack Boilerplate",
    description:
      "Production-ready TanStack Start starter template built with Tailwind CSS 4 and TypeScript.",
    url: "/tanstack-boilerplate",
    repo: "https://github.com/virastack/tanstack-boilerplate",
    color: "bg-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-500/10",
    textColor: "text-cyan-500",
    status: "In Dev",
  },
  {
    name: "Start (CLI)",
    description:
      "Automated scaffolding tool to initialize and scale high-discipline ViraStack architectures.",
    url: "/cli",
    repo: "https://github.com/virastack/cli",
    color: "bg-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-500/10",
    textColor: "text-teal-500",
    status: "Research",
  },
  {
    name: "Standards",
    description:
      "Zero-config ESLint and Prettier suite ensuring absolute code integrity across every project.",
    url: "/standards",
    repo: "https://github.com/virastack/standards",
    color: "bg-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-600/10",
    textColor: "text-emerald-500",
    status: "Coming Soon",
  },
  {
    name: "Error Guard",
    description:
      "Pro-grade error handling and smart recovery protocols for zero-friction React environments.",
    url: "/error-guard",
    repo: "https://github.com/virastack/error-guard",
    color: "bg-red-500",
    bgColor: "bg-red-50 dark:bg-red-500/10",
    textColor: "text-red-500",
    status: "Coming Soon",
  },
];
