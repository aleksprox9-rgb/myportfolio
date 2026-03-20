import { memo, type ButtonHTMLAttributes } from "react";
import { cn } from "@/functions";

export const Button = memo(
  ({
    children,
    className,
    ...props
  }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button
        {...props}
        className={cn(
          "text-shadow-2xl inline-flex aspect-[8/5] h-full cursor-pointer items-center justify-center rounded-xl bg-rose-500 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-rose-600 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:outline-none active:scale-95 active:bg-indigo-600 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
