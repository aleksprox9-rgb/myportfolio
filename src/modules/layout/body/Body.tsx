import { About } from "@/modules/about/About";
import ExampleSkills from "@/modules/skills/ExampleSkills";

export function Body() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="w-full max-w-6xl border-neutral-50 bg-neutral-100 px-4 py-10 shadow-lg sm:px-6 lg:px-8 dark:bg-neutral-900">
        <About />
        <ExampleSkills />
      </div>
    </main>
  );
}
