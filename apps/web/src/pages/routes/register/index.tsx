import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@layouts/dashboard'
import { Container, Spacer, Text } from '@nextui-org/react'
import { useCompany } from '@rusell/companies'
import { RouteForm } from '@rusell/routes'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
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

const RegisterRoute = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [companyError, router])

  const handleSubmit = async values => {
    await axios.post(`/api/routes/companies/${company.id}/routes`, values)
    await router.push('/')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register route',
          })}
        </title>
      </NextHead>

      {loadingCompany && <div>Loading...</div>}

      {company && (
        <Container sm>
          <Text h3>
            <FormattedMessage defaultMessage="Register route" />
          </Text>

          <Spacer y={1} />

          <RouteForm onSubmit={handleSubmit} />
        </Container>
      )}
    </>
  )
}

export default withLayout(withPageAuthRequired(RegisterRoute), DashboardLayout)
