import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@layouts/dashboard'
import { Text } from '@nextui-org/react'
import { useCompany } from '@rusell/companies'
import { EmployeeForm } from '@rusell/employees'
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

const RegisterEmployee = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  })

  const handleSubmit = async values => {
    await axios.post(
      `/api/employees/companies/${company?.id}/employees`,
      values,
    )
    await router.push('/employees')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register employee',
          })}
        </title>
      </NextHead>

      {loadingCompany && <div>Loading...</div>}
      {!loadingCompany && (
        <>
          <Text h2>
            <FormattedMessage defaultMessage="Register employee" />
          </Text>

          <EmployeeForm onSubmit={handleSubmit} />
        </>
      )}
    </>
  )
}

export default withLayout(
  withPageAuthRequired(RegisterEmployee),
  DashboardLayout,
)
