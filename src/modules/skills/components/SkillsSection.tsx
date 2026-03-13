import type { ReactNode } from "react";

type SkillsSectionProps = {
    title: string;
    children: ReactNode;
}

export function SkillsSection({ title, children }: SkillsSectionProps) {
    return (
        <section className='w-full py-16'>
            <div className='mx-auto max-w-6xl px-4'>
                <h2 className='mb-10 text-center text-4xl font-bold tracking-tighter text-white'>
                    {title}
                </h2>
                <div className='flex flex-col lg:flex-row gap-6'>
                    {children}
                </div>
            </div>
        </section>
    );
}
