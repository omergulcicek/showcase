"use client";

import { useViraPassword } from "@virastack/password-toggle";
import { Input } from "@/components/ui/input";

export function CustomTextDemo() {
  const { inputProps, btnProps } = useViraPassword({
    icons: {
      show: <span>Show</span>,
      hide: <span>Hide</span>,
    },
  });

  return (
    <div className="relative w-full max-w-xs mt-4">
      <Input {...inputProps} className="pr-16" placeholder="Password" />
      <button
        {...btnProps}
        className="absolute right-0 top-0 h-full px-3 text-xs font-semibold text-muted-foreground hover:text-foreground"
      >
        {btnProps.children}
      </button>
    </div>
  );
}
