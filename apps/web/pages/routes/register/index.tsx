import { Container, Spacer, Text } from '@nextui-org/react'
import { Addresses } from '@rusell/addresses/models'
import useCompany from '@rusell/companies/hooks/useCompany'
import { fetcher } from '@rusell/core/http/fetcher'
import RouteForm from '@rusell/routes/components/RouteForm'
import DashboardLayout from '@rusell/ui/layouts/DashboardLayout'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import useSWR from 'swr'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const RegisterRoute = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [companyError, router])

  const { data: addresses, isValidating: loadingAddresses } = useSWR<Addresses>(
    '/api/addresses',
    fetcher,
  )

  const handleSubmit = async values => {
    await axios.post(`/api/routes/companies/${company.id}/routes`, values)
    await router.push('/')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register route',
          })}
        </title>
      </NextHead>

      {(loadingCompany || loadingAddresses) && <div>Loading...</div>}

      {company && addresses && addresses.length > 0 && (
        <Container sm>
          <Text h3>
            <FormattedMessage defaultMessage="Register route" />
          </Text>

          <Spacer y={1} />

          <RouteForm onSubmit={handleSubmit} addresses={addresses} />
        </Container>
      )}
    </>
  )
}

RegisterRoute.Layout = DashboardLayout

export default RegisterRoute
