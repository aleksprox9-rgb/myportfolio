import { About } from '@/modules/about/About';
import ExampleSkills from '@/modules/skills/components/ExampleSkills';

export function Body() {
    return (
        <main className='min-h-screen flex justify-center'>
            <div className='w-full max-w-6xl bg-neutral-950 px-4 sm:px-6 lg:px-8 py-10 shadow-lg'>
                <About />
                <ExampleSkills />
            </div>
        </main>
    )
}