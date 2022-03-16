import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@layouts/dashboard'
import { Spacer, Text } from '@nextui-org/react'
import { useCompany } from '@rusell/companies'
import { VehicleForm } from '@rusell/vehicles'
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

const RegisterVehicle = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [router, companyError])

  const handleSubmit = async values => {
    await axios.post(`/api/vehicles/companies/${company.id}/vehicles`, values)
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register vehicle',
          })}
        </title>
      </NextHead>

      {loadingCompany && <div>Loading company...</div>}
      {companyError && <div>failed to load data</div>}

      {company && (
        <>
          <Text h3>
            <FormattedMessage defaultMessage="Register vehicle" />
          </Text>

          <Spacer y={1} />

          <VehicleForm onSubmit={handleSubmit} />
        </>
      )}
    </>
  )
}

export default withLayout(
  withPageAuthRequired(RegisterVehicle),
  DashboardLayout,
)
