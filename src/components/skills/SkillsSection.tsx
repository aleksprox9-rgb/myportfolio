import type { ReactNode } from "react";

type SkillsSectionProps = {
    title: string;
    children: ReactNode;
}

export function SkillsSection({ title, children }: SkillsSectionProps) {
    return (
        <section className='w-full absolute top-40 left-0 flex'>
            <div className='max-w-6xl px-3 mx-auto flex items-center justify-between flex-col gap-4'>
                <h2 className='text-4xl font-semibold tracking-tighter'>
                    {title}
                </h2>
                <div className='flex flex-col md:flex-row gap-3 bg-black/60 px-5 py-4 rounded-2xl w-full justify-between'>
                    {children}
                </div>
            </div>
        </section>
    );
}
