import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import useCompany from 'companies/hooks/useCompany'
import { fetcher } from 'core/http/fetcher'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import ParcelForm from 'parcels/components/ParcelForm'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import useSWR from 'swr'
import DashboardLayout from 'ui/layouts/DashboardLayout'
import withAuthAndi18n from 'utils/withAuthAndi18n'
import { Vehicles } from 'vehicles/models'

export const getServerSideProps = withAuthAndi18n

const RegisterParcel = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [companyError, router])

  const { data: vehicles, isValidating: loadingVehicles } = useSWR<Vehicles>(
    company ? `/api/vehicles/companies/${company.id}/vehicles` : null,
    fetcher,
  )

  const handleSubmit = async values => {
    await axios.post(`/api/parcels/companies/${company.id}/parcels`, values)
    await router.push('/')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register parcel',
          })}
        </title>
      </NextHead>

      {(loadingCompany || loadingVehicles) && <div>Loading...</div>}

      {company && vehicles && vehicles.length > 0 && (
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            <FormattedMessage defaultMessage="Register parcel" />
          </Typography>

          <Card sx={{ mt: 5 }}>
            <CardContent>
              <ParcelForm
                onSubmit={handleSubmit}
                clients={[]}
                vehicles={vehicles}
                dispatcherId="123"
              />
            </CardContent>
          </Card>
        </Container>
      )}
    </>
  )
}

RegisterParcel.Layout = DashboardLayout

export default RegisterParcel
