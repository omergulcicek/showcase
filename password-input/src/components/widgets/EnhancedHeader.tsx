"use client";

import Balancer from "react-wrap-balancer";

import { Buttons } from "./Buttons";

interface EnhancedHeaderProps {
  title: string;
  subtitle: string;
  buttons: Buttons[];
}

export function EnhancedHeader({
  title,
  subtitle,
  buttons,
}: EnhancedHeaderProps) {
  return (
    <div className="text-center py-6 max-w-3xl mx-auto flex flex-col gap-6 items-center">
      <Balancer
        as="h1"
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white"
      >
        {title}
      </Balancer>
      <Balancer
        as="p"
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
      >
        {subtitle}
      </Balancer>

      <Buttons buttons={buttons} />
    </div>
  );
}
