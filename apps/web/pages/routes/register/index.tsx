import { Container, Spacer, Text } from '@nextui-org/react'
import useCompany from '@rusell/companies/hooks/useCompany'
import RouteForm from '@rusell/routes/components/form'
import DashboardLayout from '@rusell/ui/layouts/DashboardLayout'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
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

      {loadingCompany && <div>Loading...</div>}

      {company && (
        <Container sm>
          <Text h3>
            <FormattedMessage defaultMessage="Register route" />
          </Text>

          <Spacer y={1} />

          <RouteForm onSubmit={handleSubmit} />
        </Container>
      )}
    </>
  )
}

RegisterRoute.Layout = DashboardLayout

export default RegisterRoute
