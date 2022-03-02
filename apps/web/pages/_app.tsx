import '../styles/fonts.css'

import { UserProvider } from '@auth0/nextjs-auth0'
import { NextUIProvider } from '@nextui-org/react'
import { CompanyProvider } from 'companies/context'
import { NextComponentType, NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { IntlProvider } from 'react-intl'
import DefaultLayout from 'ui/layouts/DefaultLayout'
import { darkTheme, lightTheme } from 'ui/theme/shared'
import ThemeConfig from 'ui/theme/ThemeConfig'

type NextPageWithLayout = NextPage & {
  Layout?: NextComponentType
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { locale, defaultLocale } = useRouter()

  const Layout = Component.Layout || DefaultLayout

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={pageProps.intlMessages}
    >
      <UserProvider>
        <ThemeConfig>
          <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
              light: lightTheme.className,
              dark: darkTheme.className,
            }}
          >
            <NextUIProvider>
              <CompanyProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </CompanyProvider>
            </NextUIProvider>
          </NextThemesProvider>
        </ThemeConfig>
      </UserProvider>
    </IntlProvider>
  )
}

export default App
