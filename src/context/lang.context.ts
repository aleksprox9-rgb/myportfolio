import { createContext } from "react"
import type { translations } from "../i18n"

export type LangType = 'en' | 'ru'

export type ILangContext = {
    lang: LangType
    toggleLang: () => void
    t: (key: keyof typeof translations['ru']) => string;
}

export const LangContext = createContext<ILangContext>({} as ILangContext)
