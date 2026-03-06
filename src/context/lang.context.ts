import { createContext } from "react"

export type LangType = 'en' | 'ru'

export type ILangContext = {
    lang: LangType
    toggleLang: () => void
}

export const LangContext = createContext<ILangContext>({} as ILangContext)
