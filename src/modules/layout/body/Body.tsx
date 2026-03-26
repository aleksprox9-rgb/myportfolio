import { About } from "@/modules/about/About";
import { Constructor } from "@/modules/constructor/Constructor";
import ExampleSkills from "@/modules/skills/ExampleSkills";

export function Body() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="w-full max-w-6xl border-neutral-50 bg-neutral-100 px-4 py-10 shadow-lg sm:px-6 lg:px-8 dark:bg-neutral-900">
        <About />
        <ExampleSkills />
        <section id="contact" className='top-40 relative'>
          <Constructor />
        </section>
        <div className='h-100'></div>
      </div>
    </main>
  );
}
