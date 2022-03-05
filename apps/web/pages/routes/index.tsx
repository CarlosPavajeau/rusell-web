import { Typography } from '@mui/material'
import useCompany from '@rusell/companies/hooks/useCompany'
import { fetcher } from '@rusell/core/http/fetcher'
import { Route } from '@rusell/routes/models'
import DashboardLayout from '@rusell/ui/layouts/DashboardLayout'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import useSWR from 'swr'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const Routes = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [companyError, router])

  const { data: routes, isValidating: loadingRoutes } = useSWR<Route[]>(
    company ? `/api/routes/companies/${company.id}/routes` : null,
    fetcher,
  )

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Routes',
          })}
        </title>
      </NextHead>

      <Typography variant="h3" align="center" sx={{ mb: 5 }}>
        <FormattedMessage defaultMessage="Routes" />
      </Typography>

      {(loadingCompany || loadingRoutes) && <div>Loading...</div>}

      {routes && routes.length > 0 ? (
        <ul>
          {routes.map(route => (
            <li key={route.id}>{route.from}</li>
          ))}
        </ul>
      ) : (
        <div>No routes</div>
      )}
    </>
  )
}

Routes.Layout = DashboardLayout

export default Routes
