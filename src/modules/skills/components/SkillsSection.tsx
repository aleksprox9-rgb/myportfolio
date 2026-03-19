import { Reveal } from "@/ui/Reveal";
import type { ReactNode } from "react";

type SkillsSectionProps = {
  title: string;
  children: ReactNode;
};

export function SkillsSection({ title, children }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="w-full py-36"
    >
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="text-shadow-2xl mb-10 text-center text-5xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-100">
            {title}
          </h2>
        </Reveal>
        <Reveal transition={{delay: 0.4, duration: 0.5}}>
          <div className="flex flex-col gap-6 lg:flex-row">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
