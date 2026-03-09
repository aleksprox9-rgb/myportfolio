import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from '../../shared/hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { useLang } from '../../shared/hooks/useLang';
import { HeaderNav } from '../../constants/navigation';

export default function Header() {
    const { theme, toggleTheme } = useTheme()
    const { lang, toggleLang } = useLang()
    const { t } = useTranslation()

    const [isOpen, setIsOpen] = useState(false);


    return (
        <header className='fixed top-0 left-0 w-full z-50 bg-white/30 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800'>
            <div className='max-w-6xl px-4 mx-auto h-16 flex items-center justify-between'>
                {/* Logo */}
                <div className="text-2xl font-semibold tracking-tight">
                    MyPortfolio
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-m font-medium">
                    {HeaderNav.navLinks.map(({ id, link }) => (
                        <a href={link} className='transition-colors'>
                            {t(`${HeaderNav.path}${id}`)}
                        </a>
                    ))}
                </nav>

                {/* Controls */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        onClick={toggleLang}
                        aria-label="Toggle lang"
                    >
                        {lang}
                    </button>

                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="text-center md:hidden px-4 py-4 space-y-2 bg-white dark:bg-black">
                    <a
                        href="#projects"
                        className="block text-sm font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        {t('header.projects')}
                    </a>
                    <a
                        href="#about"
                        className="block text-sm font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        {t('header.about')}
                    </a>
                    <a
                        href="#contact"
                        className="block text-sm font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        {t('header.contact')}
                    </a>
                </div>
            )}
        </header>
    );
}
