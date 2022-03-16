import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DefaultLayout from '@layouts/default'
import { Container, Spacer, Text } from '@nextui-org/react'
import { ClientForm } from '@rusell/clients'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
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

const RegisterClient = () => {
  const router = useRouter()
  const intl = useIntl()

  const handleSubmit = async values => {
    await axios.post('/api/clients', values)
    await router.push('/')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register client',
          })}
        </title>
      </NextHead>
      <Container
        alignItems="center"
        css={{
          margin: 'auto',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Container sm>
          <Text h3>
            <FormattedMessage defaultMessage="Register client" />
          </Text>

          <Spacer y={1} />

          <ClientForm onSubmit={handleSubmit} />
        </Container>
      </Container>
    </>
  )
}

export default withLayout(withPageAuthRequired(RegisterClient), DefaultLayout)
