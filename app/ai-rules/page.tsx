import { Button } from "@/components/ui/button";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal";
import { Github, ArrowRight } from "lucide-react";

export const metadata = {
  title: "AI Rules | ViraStack",
  description:
    "AI-native architecture kit and high-discipline protocols for modern React applications.",
};

export default function AiRulesPage() {
  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-16 px-12 md:px-16 pb-8 pt-8">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Transform Your LLM into an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
              Elite React Engineer.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            AI-native architecture kit and high-discipline protocols for modern
            React applications. Stop fighting with your AI, start building
            scalable products.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button
              asChild
              size="lg"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
            >
              <a
                href="https://github.com/virastack/ai-rules"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#features">
                Explore Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end w-full">
          <Terminal className="w-full max-w-lg shadow-2xl">
            <TypingAnimation>&gt; npx @virastack/ai-rules init</TypingAnimation>
            <AnimatedSpan delay={1500} className="text-muted-foreground">
              [Loading...]
            </AnimatedSpan>
            <AnimatedSpan delay={2000} className="text-green-500">
              ✔ Created .cursor/rules/core-principles.mdc
            </AnimatedSpan>
            <AnimatedSpan delay={2500} className="text-green-500">
              ✔ Created .cursor/rules/frontend/nextjs.mdc
            </AnimatedSpan>
            <AnimatedSpan delay={3000} className="text-green-500">
              ✔ Created .cursor/rules/frontend/tanstack-query.mdc
            </AnimatedSpan>
            <AnimatedSpan delay={3500} className="text-green-500">
              ✔ Created AGENTS.md
            </AnimatedSpan>
            <AnimatedSpan delay={4000} className="text-blue-500">
              ℹ Updated 14 rules in total.
            </AnimatedSpan>
            <TypingAnimation
              delay={4500}
              className="text-fuchsia-400 font-semibold mt-2"
            >
              ✅ ViraStack AI Rules is ready. Try: Ask AI to plan a new feature.
            </TypingAnimation>
          </Terminal>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="flex flex-col gap-8 mt-8">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-3xl font-bold mb-4">The "Aha!" Moment</h2>
          <p className="text-muted-foreground text-lg">
            See the difference between standard AI output and ViraStack AI Rules
            output. High discipline means production-ready code on the first
            try.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-t-lg">
              <span className="font-semibold text-red-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Standard LLM Output
              </span>
              <span className="text-xs text-muted-foreground">
                Disorganized & Error-Prone
              </span>
            </div>
            <div className="bg-zinc-950 rounded-b-lg p-4 overflow-x-auto border border-zinc-800 text-sm font-mono text-zinc-300">
              <pre>
                <code>{`// Prompt: "Write a user profile component"

export default function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setUser);
  }, []);

  if (!user) return <div>Loading...</div>;
  
  return <div>{user.name}</div>;
}

// ❌ No type safety
// ❌ Client-side waterfall request
// ❌ No error handling
// ❌ Missing loading skeleton`}</code>
              </pre>
            </div>
          </div>

          {/* After */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-t-lg">
              <span className="font-semibold text-green-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                ViraStack AI Output
              </span>
              <span className="text-xs text-muted-foreground">
                Production-Ready
              </span>
            </div>
            <div className="bg-zinc-950 rounded-b-lg p-4 overflow-x-auto border border-zinc-800 text-sm font-mono text-zinc-300">
              <pre>
                <code>{`// Prompt: "Write a user profile component"

import { useQuery } from '@tanstack/react-query';
import { userKeys } from '@/features/users/api/query-keys';
import { fetchUser } from '@/features/users/api/fetch-user';
import { Skeleton } from '@/components/ui/skeleton';

export function UserProfile({ userId }: { userId: string }) {
  const { data: user, isLoading } = useQuery({
    queryKey: userKeys.detail(userId),
    queryFn: ({ signal }) => fetchUser(userId, signal),
  });

  if (isLoading) return <Skeleton className="w-full h-32" />;
  
  return <article>{user.name}</article>;
}

// ✓ Feature-Driven Design
// ✓ Zod-First Type Safety in API layer
// ✓ TanStack Query & AbortSignal integration`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="flex flex-col gap-8 mt-12">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-3xl font-bold mb-4">Core Principles</h2>
          <p className="text-muted-foreground text-lg">
            Built-in rules that force your AI to write high-quality, scalable
            code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl bg-card">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">Elite AI Persona</h3>
            <p className="text-muted-foreground">
              Transforms your LLM into a highly disciplined, specialized coding
              assistant. Prevents lazy coding.
            </p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-semibold mb-2">
              Feature-Driven Design
            </h3>
            <p className="text-muted-foreground">
              Enforces strict domain-based organization for maximum scalability.
              Keeps your app directory clean.
            </p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">
              Zod-First Type Safety
            </h3>
            <p className="text-muted-foreground">
              Ensures end-to-end type safety derived from schemas. AI must
              validate every API response.
            </p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Performance-First</h3>
            <p className="text-muted-foreground">
              Built-in rules for LCP optimization, CLS prevention, and maximum
              efficiency in React.
            </p>
          </div>
          <div className="p-6 border rounded-xl bg-card">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-2">LLM Agnostic</h3>
            <p className="text-muted-foreground">
              Works seamlessly with Cursor, Windsurf, Claude Code, GitHub
              Copilot, and other agentic tools.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center text-center gap-6 mt-12 py-12 border-t">
        <h2 className="text-3xl font-bold">Ready to upgrade your AI?</h2>
        <p className="text-muted-foreground max-w-xl">
          Install ViraStack AI Rules today and experience the difference in your
          next coding session.
        </p>
        <div className="bg-zinc-950 text-zinc-300 px-6 py-3 rounded-lg font-mono text-sm border border-zinc-800 flex items-center gap-4">
          <span>npx @virastack/ai-rules init</span>
        </div>
      </section>
    </main>
  );
}
