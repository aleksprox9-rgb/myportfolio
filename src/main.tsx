import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './app/providers/ThemeProvider.tsx'
import { MainRoutes } from './app/router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  </StrictMode>,
)
