"use client";

import Link from "next/link";

import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export interface Buttons {
  href: string;
  icon: LucideIcon;
  text: string;
}

interface ButtonsProps {
  buttons: Buttons[];
}

export function Buttons({ buttons }: ButtonsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 justify-center">
      {buttons.map((button, index) => {
        const Icon = button.icon;
        return (
          <Button key={index} asChild variant="secondary" size="sm">
            <Link href={button.href} target="_blank">
              <Icon className="w-4 h-4" />
              {button.text}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
