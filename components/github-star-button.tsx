import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

interface GithubStarButtonProps {
  href: string;
}

export function GithubStarButton({ href }: GithubStarButtonProps) {
  return (
    <Button variant="outline" asChild>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Github />
        Star on GitHub
      </Link>
    </Button>
  );
}
