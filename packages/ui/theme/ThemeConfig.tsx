import { Components, CssBaseline } from '@mui/material'
import {
  deDE,
  enUS,
  esES,
  faIR,
  frFR,
  jaJP,
  ptBR,
  ruRU,
  zhCN,
} from '@mui/material/locale'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles'
import { ReactNode, useMemo } from 'react'

import { getDesignTokens } from './branding'
import GlobalStyles from './GlobalStyles'
import ComponentsOverrides from './overrides'
import { ThemeContextProvider, useThemeContext } from './ThemeContext'

const languageMap = {
  en: enUS,
  zh: zhCN,
  fa: faIR,
  ru: ruRU,
  pt: ptBR,
  es: esES,
  fr: frFR,
  de: deDE,
  ja: jaJP,
}

interface Props {
  children: ReactNode
}

const ThemeConfig = (props: Props) => {
  const { children } = props
  const context = useThemeContext()

  const theme = useMemo(() => {
    const designTokens = getDesignTokens(context.mode)
    const nextTheme = createTheme(designTokens, languageMap.es)

    nextTheme.components = {
      ...nextTheme.components,
      ...(ComponentsOverrides(nextTheme) as Components),
    }

    return nextTheme
  }, [context.mode])

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContextProvider value={context}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ThemeContextProvider>
    </StyledEngineProvider>
  )
}

export default ThemeConfig
