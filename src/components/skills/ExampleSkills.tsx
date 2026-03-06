import { DomainCard } from "./DomainCard";
import { SkillsSection } from "../../SkillsSection";

export default function ExampleSkills() {
  return (
    <SkillsSection title="Skills">
      <DomainCard
        title="Frontend"
        description="Building SPA applications with modern React ecosystem."
        technologies={[
          {
            name: "React",
            description:
              "Component architecture, hooks, performance optimization.",
          },
          {
            name: "TypeScript",
            description:
              "Strong typing, generics, scalable frontend architecture.",
          },
          {
            name: "Vite",
            description: "Fast dev environment and optimized builds.",
          },
        ]}
      />

      <DomainCard
        title="Backend"
        description="Designing scalable APIs and data-driven services."
        technologies={[
          {
            name: "Go",
            description:
              "REST APIs, concurrency, clean architecture.",
          },
          {
            name: "PostgreSQL",
            description: "Schema design, indexing, transactions.",
          },
          {
            name: "Redis",
            description: "Caching and performance optimization.",
          },
          {
            name: "Kafka",
            description: "Event-driven communication.",
          },
        ]}
      />

      <DomainCard
        title="Tools"
        description="Development workflow and infrastructure tooling."
        technologies={[
          { name: "Git" },
          { name: "Docker" },
          { name: "Bun" },
          { name: "Vim" },
        ]}
      />
    </SkillsSection>
  );
}