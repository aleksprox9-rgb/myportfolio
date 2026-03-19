import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useLang } from "@/hooks/useLang";
import { Button } from "@/ui/Button";
import { Navbar } from "./components/Navbar";
import { Reveal } from "@/ui/Reveal";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  return (
    <Reveal
      variants={{
        hidden: { opacity: 0, y: -65 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.4}}
      animate={"visible"}
    >
      <header className="fixed top-0 left-0 z-50 w-full border-b border-neutral-800 bg-neutral-200 dark:border-neutral-200 dark:bg-neutral-800">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight text-rose-500">
            MyPortfolio
          </div>

          {/* Desktop Navigation */}
          <Navbar />

          {/* Controls */}
          <div className="flex h-full items-center gap-2 p-2.5">
            <Button
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            </Button>

            <Button
              onClick={toggleLang}
              aria-label="Toggle lang"
            >
              {lang}
            </Button>
          </div>
        </div>
      </header>
    </Reveal>
  );
}
