import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Box, Button, Link, Typography } from '@mui/material'
import Head from 'next/head'
import { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import DashboardLayout from 'ui/layouts/DashboardLayout'
import ThemeContext from 'ui/theme/ThemeContext'
import loadI18nMessages from 'utils/i18n/loadIntlMessages'

const Web = () => {
  const { user, error, isLoading } = useUser()
  const { toggleTheme, mode } = useContext(ThemeContext)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>Rusell</title>
      </Head>
      <Box sx={{ p: 4 }}>
        {user && (
          <>
            <Typography variant="h5">
              <strong>{user.name}</strong>
            </Typography>
            <Typography variant="caption">{user.email}</Typography>
          </>
        )}

        <Box sx={{ my: 3 }}>
          {user === undefined && (
            <Button variant="contained" color="primary">
              <Link href="/api/auth/login" sx={{ textDecoration: 'none' }}>
                Login
              </Link>
            </Button>
          )}
          {user !== undefined && (
            <Button variant="outlined" color="error">
              <Link
                href="/api/auth/logout"
                color="error"
                sx={{ textDecoration: 'none' }}
              >
                <FormattedMessage
                  defaultMessage="Logout"
                  description="Index: Logout"
                />
              </Link>
            </Button>
          )}
        </Box>

        <Box sx={{ my: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => toggleTheme(mode === 'light' ? 'dark' : 'light')}
          >
            Toggle Theme
          </Button>
        </Box>
      </Box>
    </>
  )
}

Web.Layout = DashboardLayout

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async context => {
    return {
      props: {
        intlMessages: await loadI18nMessages({
          locale: context.locale,
          defaultLocale: context.defaultLocale,
        }),
      },
    }
  },
})

export default Web
