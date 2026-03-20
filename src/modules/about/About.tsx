import { useTranslation } from "react-i18next";
import { StatsSection, type StatItem } from "./components/StatsSection";
import { AboutConfig } from "./about.data";
import { Reveal } from "@/ui/Reveal";

export function About() {
  const { t } = useTranslation();
  const statsData = t(`${AboutConfig.path}.stats`, {
    returnObjects: true,
  }) as StatItem[];
  return (
    <section
      id="about"
      className="flex w-full justify-center py-40"
    >
      <div className="grid w-full max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        {/* Left side */}
        <Reveal
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="space-y-6">
            <h2 className="w-fit border-b-2 py-5 text-5xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
              {t(`${AboutConfig.path}.title`)}
            </h2>

            <p className="text-lg leading-relaxed whitespace-pre-line text-neutral-800 dark:text-neutral-200">
              {t(`${AboutConfig.path}.bio`)}
            </p>
          </div>
        </Reveal>

        {/* Right side */}
        <StatsSection data={statsData} />
      </div>
    </section>
  );
}
