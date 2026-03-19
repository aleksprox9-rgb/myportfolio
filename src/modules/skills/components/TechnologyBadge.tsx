import type { Technology } from "@/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SkillsConfig } from "../skills.data";
import { cn } from "@/functions";

export function TechnologyBadge({ id, icon }: Technology) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const baseKey = `${SkillsConfig.path}.technologies.${id}`;

  return (
    <div
      onClick={() => setIsActive((v) => !v)}
      className={cn(
        "group relative flex h-22 min-w-22 flex-1 flex-col items-center justify-center gap-3 rounded-xl px-3 py-1.5 text-sm",
        "cursor-pointer border shadow-sm",
        "transition-all duration-200 ease-out",
        "border-neutral-200 bg-neutral-300 hover:scale-105 hover:border-neutral-100 hover:bg-neutral-200",
        "active:scale-95",
        "focus:ring-2 focus:ring-neutral-400 focus:outline-none",
        "dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-800",
        isActive &&
          "border-neutral-100 bg-neutral-100 shadow-md dark:bg-neutral-800",
      )}
    >
      <icon.Component
        className="contrast-125"
        size={40}
        color={icon.color}
      />
      <span className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
        {t(`${baseKey}.name`)}
      </span>

      <div
        className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-48 -translate-x-1/2 transition-all duration-200 ${isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 md:group-hover:translate-y-0"}`}
      >
        <div className="rounded-xl border border-neutral-100 bg-neutral-200 p-2 text-center text-sm font-semibold text-neutral-800 shadow-xl dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          {t(`${baseKey}.desc`)}
        </div>
      </div>
    </div>
  );
}
