import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@layouts/dashboard'
import { Container, Spacer, Text } from '@nextui-org/react'
import { AddressForm } from '@rusell/addresses'
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

const RegisterAddress = () => {
  const router = useRouter()
  const intl = useIntl()

  const handleSubmit = async values => {
    await axios.post('/api/addresses', values)
    await router.push('/addresses')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register address',
          })}
        </title>
      </NextHead>
      <Container md>
        <Text h2>
          <FormattedMessage defaultMessage="Register address" />
        </Text>

        <Spacer y={1} />

        <AddressForm onSubmit={handleSubmit} />
      </Container>
    </>
  )
}

export default withLayout(
  withPageAuthRequired(RegisterAddress),
  DashboardLayout,
)
