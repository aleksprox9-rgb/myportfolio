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
        <div className="grid lg:grid-cols-3 items-stretch gap-6">{children}</div>
      </div>
    </section>
  );
}
