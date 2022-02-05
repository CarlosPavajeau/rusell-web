import { UserProvider } from '@auth0/nextjs-auth0'
import { Container } from '@mui/material'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Container maxWidth="sm">
        <Component {...pageProps} />
      </Container>
    </UserProvider>
  )
}

export default App
