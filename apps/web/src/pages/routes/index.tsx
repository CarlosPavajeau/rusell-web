import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@layouts/dashboard'
import { Typography } from '@mui/material'
import { useCompany } from '@rusell/companies'
import type { Route } from '@rusell/routes'
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

export default withLayout(withPageAuthRequired(Routes), DashboardLayout)
