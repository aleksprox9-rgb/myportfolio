import { DomainCard } from "./DomainCard";
import { SkillsSection } from "../../SkillsSection";
import { SiApachekafka, SiBun, SiDocker, SiGit, SiGo, SiPostgresql, SiReact, SiRedis, SiTypescript, SiVim, SiVite } from 'react-icons/si';

export default function ExampleSkills() {
  return (
    <SkillsSection title="Skills">
      <DomainCard
        title="Frontend"
        description="Building SPA applications with modern React ecosystem."
        technologies={[
          {
            Icon: SiReact,
            name: "React",
            description:
              "Component architecture, hooks, performance optimization.",
          },
          {
            Icon: SiTypescript,
            name: "TypeScript",
            description:
              "Strong typing, generics, scalable frontend architecture.",
          },
          {
            Icon: SiVite,
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
            Icon: SiGo,
            name: "Go",
            description:
              "REST APIs, concurrency, clean architecture.",
          },
          {
            Icon: SiPostgresql,
            name: "PostgreSQL",
            description: "Schema design, indexing, transactions.",
          },
          {
            Icon: SiRedis,
            name: "Redis",
            description: "Caching and performance optimization.",
          },
          {
            Icon: SiApachekafka,
            name: "Kafka",
            description: "Event-driven communication.",
          },
        ]}
      />

      <DomainCard
        title="Tools"
        description="Development workflow and infrastructure tooling."
        technologies={[
          { Icon: SiGit, name: "Git" },
          { Icon: SiDocker, name: "Docker" },
          { Icon: SiBun, name: "Bun" },
          { Icon: SiVim, name: "Vim" },
        ]}
      />
    </SkillsSection>
  );
}