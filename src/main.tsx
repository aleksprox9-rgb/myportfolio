import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './providers/ThemeProvider.tsx'
import { MainRoutes } from './MainRoutes.tsx'
import { LangProvider } from './providers/LangProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <MainRoutes />
      </LangProvider>
    </ThemeProvider>
  </StrictMode>,
)
