import { SkillsSection } from './SkillsSection';
import { SKILLS } from '../skills.data';
import { DomainCard } from './DomainCard';
import type { SkillCategory } from '@/types';
import { useTranslation } from 'react-i18next';

export default function ExampleSkills() {
  const { t } = useTranslation()
  return (
    <SkillsSection
    title={t(`${SKILLS.path}.title`)}
    >
      {(Object.keys(SKILLS.groups) as SkillCategory[]).map((key) => {
        const group = SKILLS.groups[key];
        const baseKey = `${SKILLS.path}.${key}`
        return (
          <DomainCard
            key={key}
            category={key}
            description={t(`${baseKey}.desc`)}
            title={t(`${baseKey}.title`)}
            technologies={group.technologies}
          />
      );
      })}
    </SkillsSection>
  )
}