import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@layouts/dashboard'
import { Container, Spacer, Text } from '@nextui-org/react'
import { useCompany } from '@rusell/companies'
import { useCurrentEmployee } from '@rusell/employees'
import { TransportSheetForm } from '@rusell/transport-sheets'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
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

const RegisterTransportSheet = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const [dispatcher, loadingDispatcher, dispatcherError] = useCurrentEmployee()

  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [companyError, router])

  useEffect(() => {
    if (dispatcherError) {
      router.push('/')
    }
  }, [dispatcherError, router])

  const dispatcherId = useMemo(() => {
    if (dispatcher) {
      return dispatcher.id
    }
  }, [dispatcher])

  const handleSubmit = async values => {
    await axios.post(
      `/api/transport-sheets/companies/${company.id}/transport-sheets`,
      values,
    )
    await router.push('/transport-sheets/current')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({ defaultMessage: 'Register Transport sheet' })}
        </title>
      </NextHead>

      {(loadingCompany || loadingDispatcher) && <div>Loading...</div>}

      {company && (
        <Container sm>
          <Text h3>
            <FormattedMessage defaultMessage="Register Transport sheet" />
          </Text>

          <Spacer y={1} />

          <TransportSheetForm
            onSubmit={handleSubmit}
            dispatcherId={dispatcherId}
          />
        </Container>
      )}
    </>
  )
}

export default withLayout(
  withPageAuthRequired(RegisterTransportSheet),
  DashboardLayout,
)
