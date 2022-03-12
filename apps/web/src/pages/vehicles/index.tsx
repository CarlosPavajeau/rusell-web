import DashboardLayout from '@layouts/dashboard'
import { Typography } from '@mui/material'
import { useCompany } from '@rusell/companies'
import { fetcher } from '@rusell/shared/http/fetcher'
import type { Vehicle } from '@rusell/vehicles'
import { VehiclesTable } from '@rusell/vehicles'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import useSWR from 'swr'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const Vehicles = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [companyError])

  const { data, isValidating } = useSWR<Vehicle[]>(
    company ? `/api/vehicles/companies/${company.id}/vehicles` : null,
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
            defaultMessage: 'Vehicles',
          })}
        </title>
      </NextHead>

      <Typography variant="h3" align="center" sx={{ mb: 5 }}>
        <FormattedMessage defaultMessage="Vehicles" />
      </Typography>

      {data && data.length > 0 ? (
        <VehiclesTable vehicles={data} />
      ) : (
        <div>
          <FormattedMessage defaultMessage="You don't have any vehicles yet." />
        </div>
      )}
    </>
  )
}

Vehicles.Layout = DashboardLayout

export default Vehicles
