import type { SkillCategory, Technology } from "@/types";
import { TechnologyBadge } from "./TechnologyBadge";

type DomainCardProps = {
  category: SkillCategory;
  title: string;
  description?: string;
  technologies: Technology[];
};

export function DomainCard({
  category,
  title,
  description,
  technologies,
}: DomainCardProps) {
  return (
    <div className="flex-1 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-medium">{title}</h3>

      {description && (
        <p className="mb-6 to-neutral-500 text-sm leading-relaxed">
          {description}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <TechnologyBadge
            key={tech.id}
            category={category}
            {...tech}
          />
        ))}
      </div>
    </div>
  );
}
