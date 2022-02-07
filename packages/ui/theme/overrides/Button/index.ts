import { Theme } from '@mui/material/styles'

export default function Button(theme: Theme): unknown {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '10px 24px',
        },
      },
      variants: [
        {
          props: { variant: 'tonal' },
          style: {
            backgroundColor:
              theme.palette.mode === 'light'
                ? theme.palette.secondary[100]
                : theme.palette.secondary[900],
            color:
              theme.palette.mode === 'light'
                ? theme.palette.secondary[900]
                : theme.palette.secondary[100],
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'light'
                  ? theme.palette.secondary[200]
                  : theme.palette.secondary[800],
              boxShadow: theme.shadows[2],
            },
            '&:active': {
              boxShadow: 'none',
            },
          },
        },
      ],
    },
  }
}
