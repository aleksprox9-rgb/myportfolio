import type { Technology } from "@/types";
import { TechnologyBadge } from "./TechnologyBadge";
import { useTranslation } from "react-i18next";
import { SkillsConfig } from "../skills.data";
import { useMemo } from "react";

type DomainCardProps = {
  title: string;
  description?: string;
  technologies: Technology[];
};

export function DomainCard({
  title,
  description,
  technologies,
}: DomainCardProps) {
  const { t } = useTranslation();
  const baseKey = `${SkillsConfig.path}.technologies`;

  const techList = useMemo(() => {
    return technologies.map(({ id, icon }) => ({
      id,
      icon,
      name: t(`${baseKey}.${id}.name`),
      desc: t(`${baseKey}.${id}.desc`),
    }));
  }, [technologies, t]);

  return (
    <div className="flex flex-col rounded-2xl border border-neutral-300/15 bg-neutral-600/15 p-6 shadow-sm">
      <h3 className="mb-2 text-2xl font-medium text-neutral-800 dark:text-neutral-200">
        {title}
      </h3>

      {description && (
        <p className="mb-6 text-base h-35 leading-relaxed text-neutral-900 dark:text-neutral-200">
          {description}
        </p>
      )}

      <div className="grid grid-cols-2 gap-3">
        {techList.map(({ id, icon, name, desc }) => (
          <TechnologyBadge
            key={id}
            name={name}
            desc={desc}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
}
