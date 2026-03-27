import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal";
import { TypingAnimation as MagicTypingAnimation } from "@/components/ui/typing-animation";
import { ArrowRight, ChevronRight, X, Check } from "lucide-react";
import { GithubStarButton } from "@/components/github-star-button";
import { AuroraText } from "@/components/ui/aurora-text";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

async function highlightCode(code: string, theme: any) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme,
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(`\`\`\`tsx\n${code}\n\`\`\``);

  return String(file);
}

export const metadata = {
  title: "AI Rules",
  description:
    "AI-native architecture kit and high-discipline protocols for modern React applications.",
};

export default async function AiRulesPage() {
  const beforeCode = `export default function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setUser);
  }, []);

  if (!user) return <div>Loading...</div>;
  
  return <div>{user.name}</div>;
}`;

  const afterCode = `import { useQuery } from '@tanstack/react-query';
import { userKeys, fetchUser } from '@/features/users/api';
import { Skeleton } from '@/components/ui/skeleton';

export function UserProfile({ userId }: { userId: string }) {
  const { data: user, isLoading, isError } = useQuery({
    queryKey: userKeys.detail(userId),
    queryFn: ({ signal }) => fetchUser(userId, signal),
  });

  if (isLoading) return <Skeleton className="w-full h-32 rounded-xl" />;
  if (isError || !user) return <ErrorState message="Failed to load user" />;

  return (
    <article className="p-6 border rounded-xl bg-card">
      <h2 className="text-xl font-bold">{user.name}</h2>
    </article>
  );
}`;

  const beforeHtml = await highlightCode(beforeCode, "github-dark");
  const afterHtml = await highlightCode(afterCode, "github-dark");

  return (
    <main className="flex min-h-[calc(100vh-160px)] flex-col gap-16 px-12 md:px-16">
      <section className="grid grid-cols-1 md:grid-cols-2 items-start gap-20 py-6">
        <div className="flex flex-col items-start gap-6 col-span-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            <AuroraText
              colors={["fuchsia-500", "teal-500", "fuchsia-500"].map(
                (p) => `var(--color-${p})`,
              )}
            >
              AI Rules
            </AuroraText>
            : Architectural Discipline.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            The open-source protocol for steering LLMs toward production-ready
            React code. Zero configuration, zero lazy-coding.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <GithubStarButton href="https://github.com/virastack/ai-rules" />
          </div>
        </div>

        <div className="w-full max-w-3xl mt-8 col-span-1">
          <Terminal className="w-full shadow-2xl text-left border-border">
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
              ✅ ViraStack AI Rules is ready.
            </TypingAnimation>
            <TypingAnimation
              delay={5000}
              className="text-fuchsia-400 font-semibold"
            >
              Try: Ask AI to plan a new feature.
            </TypingAnimation>
          </Terminal>
        </div>
      </section>

      <section className="flex flex-col gap-12 mt-16 max-w-5xl mx-auto w-full">
        {/* Texts and Lists Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before Text & List */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider w-fit">
                Standard LLM Output
              </div>
              <h3 className="text-2xl font-bold">Disorganized & Error-Prone</h3>
              <p className="text-muted-foreground">
                Without strict guidelines, AI produces functional but
                undisciplined code that fails production standards.
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-[15px] text-muted-foreground flex-1">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>No type safety or schema validation</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Direct fetching inside useEffect</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Zero error handling or boundaries</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>No request caching or deduplication</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Poor loading UX without skeletons</span>
              </li>
            </ul>
          </div>

          {/* After Text & List */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-wider w-fit">
                ViraStack AI Output
              </div>
              <h3 className="text-2xl font-bold">Production-Ready Code</h3>
              <p className="text-muted-foreground">
                ViraStack AI Rules enforces strict architectural patterns for
                disciplined, scalable code.
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-[15px] text-muted-foreground flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-primary font-semibold">
                    Strict type safety
                  </strong>{" "}
                  derived from API schemas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-primary font-semibold">
                    TanStack Query
                  </strong>{" "}
                  for caching and state
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-primary font-semibold">
                    Feature-driven
                  </strong>{" "}
                  domain organization
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-primary font-semibold">
                    Skeleton & Error states
                  </strong>{" "}
                  built-in
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-primary font-semibold">
                    Abort signal
                  </strong>{" "}
                  support for cleanups
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Prompt Section */}
        <div className="flex items-start flex-col gap-2 text-sm px-6 mt-10 md:w-1/3 mx-auto">
          <span className="text-muted-foreground font-mono">Prompt:</span>
          <p className="font-medium">
            <MagicTypingAnimation duration={50} loop>
              "Write a user profile component"
            </MagicTypingAnimation>
          </p>
        </div>

        {/* Code Outputs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before Code */}
          <div className="flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-[#0d1117] h-full">
            <div
              className="text-sm font-mono [&_pre]:p-4 [&_pre]:m-0 [&_figure]:m-0 [&_pre]:overflow-x-auto h-full"
              dangerouslySetInnerHTML={{ __html: beforeHtml }}
            />
          </div>

          {/* After Code */}
          <div className="flex flex-col rounded-xl overflow-hidden border border-zinc-800 bg-[#0d1117] h-full">
            <div
              className="text-sm font-mono [&_pre]:p-4 [&_pre]:m-0 [&_figure]:m-0 [&_pre]:overflow-x-auto h-full"
              dangerouslySetInnerHTML={{ __html: afterHtml }}
            />
          </div>
        </div>
      </section>

      <section id="features" className="flex flex-col gap-8 mt-12">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-3xl font-bold mb-4">Core Principles</h2>
          <p className="text-muted-foreground text-lg">
            Built-in rules that force your AI to write high-quality, scalable
            code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">🤖</span>
              <h3 className="font-semibold">Architectural Enforcement</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              AI can't take shortcuts. It must follow ViraStack's predefined
              logic patterns.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">🏗️</span>
              <h3 className="font-semibold">Feature-Driven Design</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Enforces strict domain-based organization for maximum scalability.
              Keeps your app directory clean.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">🛡️</span>
              <h3 className="font-semibold">Zod-First Type Safety</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Ensures end-to-end type safety derived from schemas. AI must
              validate every API response.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">⚡</span>
              <h3 className="font-semibold">Next-Gen UX Standards</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Automated rules for LCP, CLS, and efficient state management.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">🌐</span>
              <h3 className="font-semibold">Universal Support</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Works with Cursor, Windsurf, Claude Code, and Copilot.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
