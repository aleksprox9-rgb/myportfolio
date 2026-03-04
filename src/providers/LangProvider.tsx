import { useState, type PropsWithChildren } from "react";
import { LangContext, type LangType } from "../context/lang.context";
import { translations } from "../i18n";

export function LangProvider({ children }: PropsWithChildren) {
    const [lang, setLang] = useState<LangType>(
        () => localStorage.getItem('lang') as LangType || 'ru'
    )

    const t = (key: keyof typeof translations['ru']) => translations[lang][key]

    const toggleLang = () => setLang(prev => (prev === 'ru' ? 'en' : 'ru'))

    return (
        <LangContext.Provider
            value={{
                lang,
                toggleLang,
                t
            }}
        >
            {children}
        </LangContext.Provider>
    )
}