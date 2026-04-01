import { cn } from "@/lib/utils";

export type ViraStackProjectHeadingProps = {
  projectName: string;
  /** Tailwind classes for the project name, e.g. `text-sky-500` */
  accentClassName: string;
  /** When true, applies `text-center` (e.g. marketing hero sections). */
  textCenter?: boolean;
  className?: string;
};

export function ViraStackProjectHeading({
  projectName,
  accentClassName,
  textCenter = false,
  className,
}: ViraStackProjectHeadingProps) {
  return (
    <h1
      className={cn(
        "text-2xl lg:text-5xl",
        textCenter && "text-center",
        className,
      )}
    >
      <span className="font-black text-primary">ViraStack</span>{" "}
      <span className={cn("font-medium italic", accentClassName)}>
        {projectName}
      </span>
    </h1>
  );
}
