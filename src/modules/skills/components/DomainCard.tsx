import type { Technology } from "@/types";
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
    <div className="flex-1 rounded-2xl border p-6 shadow-sm border-neutral-300/15 bg-neutral-600/15">
      <h3 className="mb-2 text-2xl font-medium text-neutral-800 dark:text-neutral-200">
        {title}
      </h3>

      {description && (
        <p className="mb-6 text-base leading-relaxed text-neutral-900 dark:text-neutral-200">
          {description}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <TechnologyBadge
            key={tech.id}
            {...tech}
          />
        ))}
      </div>
    </div>
  );
}
