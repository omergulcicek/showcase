import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Github, Globe, Twitter } from "lucide-react";

interface UserCardProps {
  name: string;
  description?: string;
  image: string;
  links: {
    website?: string;
    twitter?: string;
    github?: string;
  };
}

export function UserCard({ name, description, image, links }: UserCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-md border border-border bg-card text-card-foreground shadow transition-colors hover:bg-muted/50">
      <div className="relative h-72 w-full overflow-hidden border-b border-border">
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="text-left">
          <h3 className="text-base font-bold">{name}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="flex items-center gap-5">
          {links.website && (
            <Link
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </Link>
          )}
          {links.github && (
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          )}
          {links.twitter && (
            <Link
              href={links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
