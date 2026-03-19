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
          <h2 className="w-fit border-b-2 py-5 text-5xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
            {t("body.about.title")}
          </h2>

          <p className="text-lg leading-relaxed whitespace-pre-line text-neutral-800 dark:text-neutral-200">
            {t("body.about.bio")}
          </p>
        </div>

        {/* Right side */}
        <StatsSection data={statsData} />
      </div>
    </section>
  );
}
