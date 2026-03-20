import { memo, useEffect, useRef, useState } from "react";
import { cn } from "@/functions";
import type { SkillIcon } from "@/types";

type Props = {
  name: string;
  desc: string;
  icon: SkillIcon;
};

export const TechnologyBadge = memo(({ name, desc, icon }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const deactivate = () => setIsActive(false);

    if (isActive) {
      window.addEventListener("scroll", deactivate, { passive: true });

      const handleClickOutside = (event: MouseEvent) => {
        if (
          badgeRef.current &&
          !badgeRef.current.contains(event.target as Node)
        ) {
          deactivate();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        window.removeEventListener("scroll", deactivate);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isActive]);

  return (
    <div
      ref={badgeRef}
      onClick={() => setIsActive((v) => !v)}
      onMouseLeave={() => setIsActive(false)}
      className={cn(
        "group relative flex h-22 min-w-22 flex-1 flex-col items-center justify-center gap-3 rounded-xl px-3 py-1.5 text-sm",
        "cursor-pointer border shadow-sm",
        "transition-all duration-200 ease-out",
        "border-neutral-200 bg-neutral-300 hover:scale-105 hover:border-neutral-100 hover:bg-neutral-200",
        "active:scale-95",
        "focus:ring-2 focus:ring-neutral-400 focus:outline-none",
        "dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-800",
      )}
    >
      <icon.Component
        className="contrast-125"
        size={40}
        color={icon.color}
      />
      <span className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
        {name}
      </span>

      <div
        className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-48 -translate-x-1/2 transition-all duration-200 ${isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 md:group-hover:translate-y-0"}`}
      >
        <div className="rounded-xl border border-neutral-100 bg-neutral-200 p-2 text-center text-sm font-semibold text-neutral-800 shadow-xl dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          {desc}
        </div>
      </div>
    </div>
  );
});
