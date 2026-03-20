import { SkillsSection } from "./components/SkillsSection";
import { SkillsConfig } from "./skills.data";
import { DomainCard } from "./components/DomainCard";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { Reveal } from "@/ui/Reveal";

export default function ExampleSkills() {
  const { t } = useTranslation(undefined, {
    keyPrefix: SkillsConfig.path,
  });

  const skillGroups = useMemo(() => Object.entries(SkillsConfig.groups), []);

  return (
    <SkillsSection title={t("title")}>
      {skillGroups.map(([key, group], index) => (
        <Reveal
          key={key}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          <DomainCard
            title={t(`categories.${key}.title`)}
            description={t(`categories.${key}.desc`)}
            technologies={group.technologies}
          />
        </Reveal>
      ))}
    </SkillsSection>
  );
}
