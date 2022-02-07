import { Theme } from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
  export interface TypeBackground {
    neutral?: string
  }
}

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface,no-unused-vars
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/Button' {
  // eslint-disable-next-line no-unused-vars
  interface ButtonPropsVariantOverrides {
    tonal: true
  }
}

declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteColor extends ColorRange {}

  // eslint-disable-next-line no-unused-vars
  interface Palette {
    primaryDark: PaletteColor
  }
}
