import { useState } from 'react'
import i18n from '../../app/features/i18n'

export type LangType = 'en' | 'ru'


export function useLang() {
    const [lang, setLang] = useState<LangType>(
        () => localStorage.getItem('lang') as LangType || 'ru'
    )

    const toggleLang = () => {
        const newLang = lang === 'en' ? 'ru' : 'en'
        setLang(newLang)
        i18n.changeLanguage(newLang)
    }
    return { lang, toggleLang }
}