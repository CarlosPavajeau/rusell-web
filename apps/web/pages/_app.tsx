import '../styles/fonts.css'

import { UserProvider } from '@auth0/nextjs-auth0'
import { NextComponentType, NextPage } from 'next'
import type { AppProps } from 'next/app'
import DefaultLayout from 'ui/layouts/DefaultLayout'
import ThemeConfig from 'ui/theme/ThemeConfig'

type NextPageWithLayout = NextPage & {
  Layout?: NextComponentType
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.Layout || DefaultLayout

  return (
    <UserProvider>
      <ThemeConfig>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeConfig>
    </UserProvider>
  )
}

export default App
