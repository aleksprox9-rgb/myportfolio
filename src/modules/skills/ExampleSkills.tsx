import { SkillsSection } from "./components/SkillsSection";
import { SkillsConfig } from "./skills.data";
import { DomainCard } from "./components/DomainCard";
import type { SkillCategory } from "@/types";
import { useTranslation } from "react-i18next";

export default function ExampleSkills() {
  const { t } = useTranslation();

  return (
    <SkillsSection title={t(`${SkillsConfig.path}.title`)}>
      {(Object.keys(SkillsConfig.groups) as SkillCategory[]).map((key) => {
        const baseKey = `${SkillsConfig.path}.categories.${key}`;
        return (
          <DomainCard
            key={key}
            description={t(`${baseKey}.desc`)}
            title={t(`${baseKey}.title`)}
            technologies={SkillsConfig.groups[key].technologies}
          />
        );
      })}
    </SkillsSection>
  );
}
