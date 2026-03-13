import type { SkillsConfig } from '@/types';
import { SiApachekafka, SiBun, SiDocker, SiGit, SiGo, SiPostgresql, SiReact, SiTypescript, SiVim, SiVite } from 'react-icons/si';

export const SKILLS: SkillsConfig = {
    path: 'body.skills',
    groups: {
        frontend: {
            titleId: 'frontend',
            technologies: [
                { id: 'react', icon: { Component: SiReact, color: '#61DAFB' } },
                { id: 'typescript', icon: { Component: SiTypescript, color: '#3178C6' } },
                { id: 'vite', icon: { Component: SiVite, color: '#646CFF' } },
            ]
        },
        backend: {
            titleId: 'backend',
            technologies: [
                { id: 'go', icon: { Component: SiGo, color: '#00ADD8' } },
                { id: 'postgresql', icon: { Component: SiPostgresql, color: '#4169E1' } },
                { id: 'kafka', icon: { Component: SiApachekafka, color: '#231F20' } },
            ]
        },
        tools: {
            titleId: 'tools',
            technologies: [
                { id: 'git', icon: { Component: SiGit, color: '#F05032' } },
                { id: 'docker', icon: { Component: SiDocker, color: '#2496ED' } },
                { id: 'bun', icon: { Component: SiBun, color: '#FBF0DF' } },
                { id: 'vim', icon: { Component: SiVim, color: '#199947' } },
            ]
        }
    }
};