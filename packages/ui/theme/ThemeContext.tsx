import { PaletteMode } from '@mui/material'
import { createContext, useState } from 'react'

interface ThemeContext {
  mode: PaletteMode
  toggleTheme: (mode: PaletteMode) => void
}

const themeContextInit: ThemeContext = {
  mode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: (_: PaletteMode) => {},
}

// eslint-disable-next-line no-redeclare
const ThemeContext = createContext<ThemeContext>(themeContextInit)
export const ThemeContextProvider = ThemeContext.Provider

export const useThemeContext = (): ThemeContext => {
  const [mode, setMode] = useState<PaletteMode>('light')

  const toggleTheme = (mode: PaletteMode) => {
    setMode(mode)
  }

  return {
    mode,
    toggleTheme,
  }
}

export default ThemeContext
