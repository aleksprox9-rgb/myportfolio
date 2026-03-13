import i18n from '@/core/i18n/i18n'
import { useState } from 'react'

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