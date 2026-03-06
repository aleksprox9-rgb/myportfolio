import { useState, type PropsWithChildren } from "react";
import { LangContext, type LangType } from "../../context/lang.context";
import i18n from '../features/i18n';

export function LangProvider({ children }: PropsWithChildren) {
    const [lang, setLang] = useState<LangType>(
        () => localStorage.getItem('lang') as LangType || 'ru'
    )

    const toggleLang = () => {
        const newLang = lang === 'ru' ? 'en' : 'ru';
        setLang(newLang)
        i18n.changeLanguage(newLang)
    }


    return (
        <LangContext.Provider
            value={{
                lang,
                toggleLang,
            }}
        >
            {children}
        </LangContext.Provider>
    )
}