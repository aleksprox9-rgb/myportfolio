import { cn } from "@/functions";
import type { AnchorHTMLAttributes } from "react";

export function A({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={cn(
        "text-lg font-medium text-neutral-400 transition-colors duration-200 ease-in-out hover:text-rose-600 active:text-indigo-500",
        className,
      )}
    >
      {children}
    </a>
  );
}
