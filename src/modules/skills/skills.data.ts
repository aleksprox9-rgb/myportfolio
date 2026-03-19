import { I18N_PATHS } from '@/config/i18n-paths';
import type { SkillCategory, SkillGroup } from "@/types";
import {
  SiApachekafka,
  SiBun,
  SiDocker,
  SiGit,
  SiGo,
  SiKubernetes,
  SiLinux,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTypescript,
  SiVite,
} from "react-icons/si";

type ISkillsConfig = {
  path: string;
  groups: Record<SkillCategory, SkillGroup>;
};

export const SkillsConfig: ISkillsConfig = {
  path: I18N_PATHS.skills,
  groups: {
    frontend: {
      titleId: "frontend",
      technologies: [
        { id: "react", icon: { Component: SiReact, color: "#61DAFB" } },
        {
          id: "typescript",
          icon: { Component: SiTypescript, color: "#3178C6" },
        },
        { id: "vite", icon: { Component: SiVite, color: "#646CFF" } },
        { id: "bun", icon: { Component: SiBun, color: "#F9F1E1" } },
      ],
    },
    backend: {
      titleId: "backend",
      technologies: [
        { id: "golang", icon: { Component: SiGo, color: "#00ADD8" } },
        {
          id: "postgresql",
          icon: { Component: SiPostgresql, color: "#4169E1" },
        },
        { id: "kafka", icon: { Component: SiApachekafka, color: "#231F20" } },
        { id: "redis", icon: { Component: SiRedis, color: "#FF4438" } },
      ],
    },
    tools: {
      titleId: "tools",
      technologies: [
        { id: "docker", icon: { Component: SiDocker, color: "#2496ED" } },
        {
          id: "kubernetes",
          icon: { Component: SiKubernetes, color: "#326CE5" },
        },
        { id: "git", icon: { Component: SiGit, color: "#F05032" } },
        { id: "linux", icon: { Component: SiLinux, color: "#222222" } },
      ],
    },
  },
};
