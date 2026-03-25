"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Github } from "lucide-react";

export default function Step7Final() {
  useEffect(() => {
    const end = Date.now() + 1 * 2000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return (
    <section className="space-y-4 mb-80">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        Congratulations! 🎉
      </h2>
      <p className="text-lg text-muted-foreground">
        From a static structure; we have reached a living, modern experience
        with the power of Next.js, the speed of Tailwind 4, and an AI-Native
        architecture.
      </p>

      <div className="mt-20 text-card-foreground">
        <h3 className="text-2xl font-semibold mb-3">What is ViraStack?</h3>
        <p className="text-muted-foreground mb-6 text-lg">
          High-performance Frontend architectures and developer-centric tools
          for modern software standards.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild className="group">
            <Link href="/">
              Explore Our Projects
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="https://github.com/virastack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              Star on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
