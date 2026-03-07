import type { ReactNode } from "react";

type SkillsSectionProps = {
    title: string;
    children: ReactNode;
}

export function SkillsSection({ title, children }: SkillsSectionProps) {
    return (
        <section className="w-full py-8 mx-auto">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold mb-10 tracking-tight text-center">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {children}
                </div>
            </div>
        </section>
    );
}
