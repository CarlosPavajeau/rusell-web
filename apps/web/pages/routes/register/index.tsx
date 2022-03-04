import { Container, Spacer, Text } from '@nextui-org/react'
import { Addresses } from 'addresses/models'
import axios from 'axios'
import useCompany from 'companies/hooks/useCompany'
import { fetcher } from 'core/http/fetcher'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import RouteForm from 'routes/components/RouteForm'
import useSWR from 'swr'
import DashboardLayout from 'ui/layouts/DashboardLayout'
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
