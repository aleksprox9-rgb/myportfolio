import { useTranslation } from "react-i18next";
import { StatsSection, type StatItem } from "./components/StatsSection";
import { AboutConfig } from "./about.data";

export function About() {
  const { t } = useTranslation();
  const statsData = t(AboutConfig.path, { returnObjects: true }) as StatItem[];
  return (
    <section
      id="about"
      className="flex w-full justify-center py-24"
    >
      <div className="grid w-full max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        {/* Left side */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold tracking-tight dark:text-neutral-900">
            {t("body.about.title")}
          </h2>

          <div className="h-[2px] w-36 bg-neutral-700" />

          <p className="leading-relaxed whitespace-pre-line text-neutral-300 dark:text-neutral-900">
            {t("body.about.bio")}
          </p>
        </div>

        {/* Right side */}
        <StatsSection data={statsData} />
      </div>
    </section>
  );
}
