import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@layouts/dashboard'
import { Spacer, Text } from '@nextui-org/react'
import { useCompany } from '@rusell/companies'
import type { Employee } from '@rusell/employees'
import { EmployeesTable } from '@rusell/employees'
import { fetcher } from '@rusell/shared/http/fetcher'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import useSWR from 'swr'
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

const Employees = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  })

  const { data, isValidating } = useSWR<Employee[]>(
    company ? `/api/employees/companies/${company?.id}/employees` : null,
    fetcher,
  )

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Employees',
            description: 'page title',
          })}
        </title>
      </NextHead>

      <Text h3>
        <FormattedMessage defaultMessage="Employees" />
      </Text>

      <Spacer y={1} />

      {(loadingCompany || isValidating) && <div>Loading...</div>}

      {data && data.length > 0 ? (
        <EmployeesTable employees={data} />
      ) : (
        <div>
          <FormattedMessage defaultMessage="No employees registered" />
        </div>
      )}
    </>
  )
}

export default withLayout(withPageAuthRequired(Employees), DashboardLayout)
