import { Typography } from '@mui/material'
import useCompany from 'companies/hooks/useCompany'
import { fetcher } from 'core/http/fetcher'
import EmployeesTable from 'employees/components/EmployeesTable'
import { Employee } from 'employees/models'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import useSWR from 'swr'
import DashboardLayout from 'ui/layouts/DashboardLayout'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

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

  if (loadingCompany || isValidating) {
    return <div>Loading...</div>
  }

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

      <Typography variant="h3" align="center" sx={{ mb: 5 }}>
        <FormattedMessage defaultMessage="Employees" />
      </Typography>

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

Employees.Layout = DashboardLayout

export default Employees
