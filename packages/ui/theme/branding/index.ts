import { PaletteMode } from '@mui/material'
import { createTheme, ThemeOptions } from '@mui/material/styles'

const defaultTheme = createTheme()

const grey = {
  50: '#f2faff',
  100: '#ecf3ff',
  200: '#e3eaf6',
  300: '#d3dbe6',
  400: '#b0b7c2',
  500: '#9097a2',
  600: '#686f79',
  700: '#555b65',
  800: '#363c45',
  900: '#161C24',
}

const primary = {
  50: '#DFE8FF',
  100: '#BFD0FF',
  200: '#9FB9FF',
  300: '#9FB9FF',
  400: '#608AFF',
  500: '#608AFF',
  main: '#0045FF',
  600: '#0045FF',
  700: '#0033BF',
  800: '#002A9F',
  900: '#002280',
}

const secondary = {
  50: '#DFE8FF',
  100: '#CCD9FF',
  200: '#B3C6FF',
  300: '#99B3FF',
  400: '#809FFF',
  500: '#668CFF',
  main: '#3366FF',
  600: '#3366FF',
  700: '#0039E6',
  800: '#0030BF',
  900: '#002699',
}

export const getPalette = (mode: PaletteMode) => ({
  common: {
    black: '#1D1D1D',
  },
  primary: {
    ...primary,
    ...(mode === 'dark' && {
      main: primary[200],
      dark: primary[200],
      contrastText: primary[800],
    }),
  },
  secondary: {
    ...secondary,
    ...(mode === 'dark' && {
      main: secondary[200],
      dark: secondary[200],
      contrastText: secondary[800],
    }),
  },
  divider: mode === 'light' ? grey[300] : grey[700],
  mode,
  ...(mode === 'dark' && {
    background: {
      default: grey[900],
      paper: grey[800],
    },
  }),
  ...(mode === 'light' && {
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[500],
    },
  }),
  ...(mode === 'dark' && {
    text: {
      primary: '#fff',
      secondary: grey[400],
      disabled: grey[900],
    },
  }),
  grey,
  error: {
    50: '#FEE6E6',
    100: '#FCCECE',
    200: '#FBB5B5',
    300: '#F99C9C',
    400: '#F88484',
    500: '#F55B6B',
    main: '#f43a3a',
    600: '#F43A3A',
    700: '#D50C0C',
    800: '#B20A0A',
    900: '#8E0808',
  },
  success: {
    50: '#E6F7E7',
    100: '#CCEECE',
    200: '#B3E6B6',
    300: '#9ADD9D',
    400: '#80D585',
    500: '#67CC6C',
    main: '#3DB543',
    600: '#3DB543',
    700: '#2D8731',
    800: '#257029',
    900: '#1E5A21',
  },
  action: {
    active: grey[600],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
})

const systemFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
]

export const getDesignTokens = (mode: PaletteMode) =>
  ({
    palette: { ...getPalette(mode) },
    shape: {
      borderRadius: 10,
    },
    spacing: 10,
    typography: {
      fontFamily: ['Open Sans', ...systemFont].join(','),
      h1: {
        fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
        fontWeight: 800,
        lineHeight: 78 / 70,
        ...(mode === 'light' && {
          color: grey[900],
        }),
      },
      h2: {
        fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
        fontWeight: 800,
        lineHeight: 44 / 36,
        color: mode === 'dark' ? grey[200] : grey[700],
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(36),
        lineHeight: 44 / 36,
        letterSpacing: 0,
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(28),
        lineHeight: 42 / 28,
        letterSpacing: 0,
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(24),
        lineHeight: 36 / 24,
        letterSpacing: 0,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(20),
        lineHeight: 30 / 20,
        letterSpacing: 0,
      },
      button: {
        textTransform: 'initial',
        fontWeight: 700,
        letterSpacing: 0,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
        lineHeight: 24 / 18,
        letterSpacing: 0,
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(16), // 16px
        lineHeight: 24 / 16,
        letterSpacing: 0,
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14), // 14px
        lineHeight: 21 / 14,
        letterSpacing: 0,
      },
      caption: {
        display: 'inline-block',
        fontSize: defaultTheme.typography.pxToRem(12), // 12px
        lineHeight: 18 / 12,
        letterSpacing: 0,
        fontWeight: 700,
      },
    },
  } as ThemeOptions)
