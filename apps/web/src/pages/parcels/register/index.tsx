import DashboardLayout from '@layouts/dashboard'
import { Container, Spacer, Text } from '@nextui-org/react'
import { useCompany } from '@rusell/companies'
import { ParcelForm } from '@rusell/parcels'
import { fetcher } from '@rusell/shared/http/fetcher'
import type { Vehicles } from '@rusell/vehicles'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import useSWR from 'swr'
import withAuthAndi18n from 'utils/withAuthAndi18n'

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
        <Container sm>
          <Text h3>
            <FormattedMessage defaultMessage="Register parcel" />
          </Text>

          <Spacer y={1} />

          <ParcelForm onSubmit={handleSubmit} />
        </Container>
      )}
    </>
  )
}

RegisterParcel.Layout = DashboardLayout

export default RegisterParcel
