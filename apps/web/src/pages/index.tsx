import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@layouts/dashboard'
import { Button, Link, Text } from '@nextui-org/react'
import Head from 'next/head'
import { FormattedMessage } from 'react-intl'
import loadI18nMessages from 'utils/i18n/loadIntlMessages'
import withLayout from 'utils/with-layout'

export const getStaticProps = async context => {
  return {
    props: {
      intlMessages: await loadI18nMessages({
        locale: context.locale,
        defaultLocale: context.defaultLocale,
      }),
    },
  }
}

const Web = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>Rusell</title>
      </Head>
      <div>
        {user && (
          <>
            <Text h5>
              <strong>{user.name}</strong>
            </Text>
            <Text small>{user.email}</Text>
          </>
        )}

        <div>
          {user === undefined && (
            <Button color="primary">
              <Link href="/api/auth/login">Login</Link>
            </Button>
          )}
          {user !== undefined && (
            <Button flat color="error">
              <Link href="/api/auth/logout" color="error">
                <FormattedMessage
                  defaultMessage="Logout"
                  description="Index: Logout"
                />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

export default withLayout(withPageAuthRequired(Web), DashboardLayout)
