import { About } from "@/modules/about/About";
import ExampleSkills from "@/modules/skills/ExampleSkills";

export function Body() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="w-full max-w-6xl bg-neutral-100 border-neutral-50 px-4 py-10 shadow-lg sm:px-6 lg:px-8 dark:bg-neutral-900">
        <About />
        <ExampleSkills />
      </div>
    </main>
  );
}
