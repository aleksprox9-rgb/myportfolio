import { DomainCard } from "./DomainCard";
import { SiApachekafka, SiBun, SiDocker, SiGit, SiGo, SiPostgresql, SiReact, SiRedis, SiTypescript, SiVim, SiVite } from 'react-icons/si';
import { SkillsSection } from './SkillsSection';

export default function ExampleSkills() {
  return (
    <SkillsSection title="Skills">
      <div className="flex justify-center">
        <DomainCard
          title="Frontend"
          description="Building SPA applications with modern React ecosystem."
          technologies={[
            {
              Icon: SiReact,
              name: "React",
              color: "#61DAFB",
              description:
                "Component architecture, hooks, performance optimization.",
            },
            {
              Icon: SiTypescript,
              name: "TypeScript",
              color: "#3178C6",
              description:
                "Strong typing, generics, scalable frontend architecture.",
            },
            {
              Icon: SiVite,
              name: "Vite",
              color: "#646CFF",
              description: "Fast dev environment and optimized builds.",
            },
          ]}
        />
      </div>

      <div className="flex justify-center">
        <DomainCard
          title="Backend"
          description="Designing scalable APIs and data-driven services."
          technologies={[
            {
              Icon: SiGo,
              name: "Go",
              color: "#00ADD8",
              description:
                "REST APIs, concurrency, clean architecture.",
            },
            {
              Icon: SiPostgresql,
              name: "PostgreSQL",
              color: "#4169E1",
              description: "Schema design, indexing, transactions.",
            },
            {
              Icon: SiRedis,
              name: "Redis",
              color: "#DC382D",
              description: "Caching and performance optimization.",
            },
            {
              Icon: SiApachekafka,
              name: "Kafka",
              color: "#231F20",
              description: "Event-driven communication.",
            },
          ]}
        />
      </div>

      <div className="flex justify-center">
        <DomainCard
          title="Tools"
          description="Development workflow and infrastructure tooling."
          technologies={[
            { 
              Icon: SiGit, 
              name: "Git", 
              color: "#F1502F" 
            },
            { 
              Icon: SiDocker, 
              name: "Docker", 
              color: "#2496ED" 
            },
            { 
              Icon: SiBun, 
              name: "Bun", 
              color: "#FBF0DF" 
            },
            { 
              Icon: SiVim, 
              name: "Vim", 
              color: "#019733" 
            },
          ]}
        />
      </div>
    </SkillsSection>
  );
}