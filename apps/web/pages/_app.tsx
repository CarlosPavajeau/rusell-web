import '../styles/fonts.css'

import { UserProvider } from '@auth0/nextjs-auth0'
import { Container } from '@mui/material'
import type { AppProps } from 'next/app'
import ThemeConfig from 'ui/theme/ThemeConfig'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <ThemeConfig>
        <Container maxWidth="sm">
          <Component {...pageProps} />
        </Container>
      </ThemeConfig>
    </UserProvider>
  )
}

export default App
