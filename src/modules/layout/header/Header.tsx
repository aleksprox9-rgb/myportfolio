import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useLang } from "@/hooks/useLang";
import { Button } from "@/ui/Button";
import { Navbar } from "./components/Navbar";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();


  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-neutral-800 dark:border-gray-800 dark:bg-white">
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
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
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
  );
}
