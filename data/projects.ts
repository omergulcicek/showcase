export type Project = {
  name: string;
  descriptionKey: string;
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
    descriptionKey: "nextjsBoilerplate",
    url: "/nextjs-boilerplate",
    repo: "https://github.com/virastack/nextjs-boilerplate",
    color: "bg-sky-500",
    bgColor: "bg-sky-50 dark:bg-sky-500/10",
    textColor: "text-sky-500",
  },
  {
    name: "AI Rules",
    descriptionKey: "aiRules",
    url: "/ai-rules",
    repo: "https://github.com/virastack/ai-rules",
    color: "bg-fuchsia-500",
    bgColor: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
    textColor: "text-fuchsia-500",
  },
  {
    name: "Input Mask",
    descriptionKey: "inputMask",
    url: "/input-mask",
    repo: "https://github.com/virastack/input-mask",
    color: "bg-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-500/10",
    textColor: "text-indigo-500",
  },
  {
    name: "Password Toggle",
    descriptionKey: "passwordToggle",
    url: "/password-toggle",
    repo: "https://github.com/virastack/password-toggle",
    color: "bg-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-500/10",
    textColor: "text-rose-500",
  },
  {
    name: "Modern Web in 3 Minutes",
    descriptionKey: "modernWeb",
    url: "/modern-web-in-3-minutes",
    repo: "https://github.com/virastack/modern-web-in-3-minutes",
    color: "bg-amber-400",
    bgColor: "bg-amber-50 dark:bg-amber-500/10",
    textColor: "text-amber-500",
  },
  {
    name: "TanStack Boilerplate",
    descriptionKey: "tanstackBoilerplate",
    url: "/tanstack-boilerplate",
    repo: "https://github.com/virastack/tanstack-boilerplate",
    color: "bg-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-500/10",
    textColor: "text-cyan-500",
    status: "In Dev",
  },
  {
    name: "Start (CLI)",
    descriptionKey: "cli",
    url: "/cli",
    repo: "https://github.com/virastack/cli",
    color: "bg-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-500/10",
    textColor: "text-teal-500",
    status: "Research",
  },
  {
    name: "Standards",
    descriptionKey: "standards",
    url: "/standards",
    repo: "https://github.com/virastack/standards",
    color: "bg-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-600/10",
    textColor: "text-emerald-500",
    status: "Coming Soon",
  },
  {
    name: "Error Guard",
    descriptionKey: "errorGuard",
    url: "/error-guard",
    repo: "https://github.com/virastack/error-guard",
    color: "bg-red-500",
    bgColor: "bg-red-50 dark:bg-red-500/10",
    textColor: "text-red-500",
    status: "Coming Soon",
  },
];
