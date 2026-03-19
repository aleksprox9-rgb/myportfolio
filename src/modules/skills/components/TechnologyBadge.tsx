import type { SkillCategory, Technology } from "@/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SKILLS } from "../skills.data";

type Props = Technology & {
  category: SkillCategory;
};

export function TechnologyBadge({ id, icon, category }: Props) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const baseKey = `${SKILLS.path}.${category}.technologies.${id}`;

  return (
    <div
      className="group relative flex h-22 min-w-22 flex-1 cursor-default flex-col items-center justify-center gap-3 rounded-xl border border-neutral-300/15 bg-neutral-600/15 px-3 py-1.5 text-sm opacity-80 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 hover:opacity-100"
      onClick={() => setIsActive((v) => !v)}
    >
      <icon.Component
        className="brightness-95"
        size={40}
        color={icon.color}
      />
      <span className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
        {t(`${baseKey}.name`)}
      </span>

      <div
        className={`pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-48 -translate-x-1/2 transition-all duration-200 ${isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 md:group-hover:translate-y-0"} `}
      >
        <div className="rounded-xl border border-neutral-300 bg-neutral-400 p-2 text-center text-sm shadow-xl dark:border-neutral-600 dark:bg-neutral-700">
          {t(`${baseKey}.desc`)}
        </div>
      </div>
    </div>
  );
}
