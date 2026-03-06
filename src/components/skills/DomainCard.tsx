import type { Technology } from "../../types";
import { TechnologyBadge } from "./TechnologyBadge";

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
  return (
    <div className="rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <h3 className="text-xl font-medium mb-2">{title}</h3>

      {description && (
        <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
          {description}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <TechnologyBadge key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
}