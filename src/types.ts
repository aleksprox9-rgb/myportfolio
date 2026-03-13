import type { IconType } from 'react-icons';

export type Technology = {
    id: string;
    icon: SkillIcon;
}

export type SkillIcon = {
    Component: IconType;
    color?: string;
}

export type SkillCategory = 'frontend' | 'backend' | 'tools';

export type SkillGroup = {
    titleId: SkillCategory;
    technologies: Technology[];
}

export type SkillsConfig = {
    path: string;
    groups: Record<SkillCategory, SkillGroup>
}