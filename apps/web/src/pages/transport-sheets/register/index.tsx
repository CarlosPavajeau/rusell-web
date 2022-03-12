import { Container, Spacer, Text } from '@nextui-org/react'
import { useCompany } from '@rusell/companies'
import { TransportSheetForm } from '@rusell/transport-sheets'
import DashboardLayout from '@rusell/ui/layouts/DashboardLayout'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const RegisterTransportSheet = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [companyError, router])

  console.log('company', company)

  const handleSubmit = async values => {
    await axios.post(
      `/api/transport-sheets/companies/${company.id}/transport-sheets`,
      values,
    )
    await router.push('/')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({ defaultMessage: 'Register Transport sheet' })}
        </title>
      </NextHead>

      {loadingCompany && <div>Loading...</div>}

      {company && (
        <Container sm>
          <Text h3>
            <FormattedMessage defaultMessage="Register Transport sheet" />
          </Text>

          <Spacer y={1} />

          <TransportSheetForm onSubmit={handleSubmit} />
        </Container>
      )}
    </>
  )
}

RegisterTransportSheet.Layout = DashboardLayout

export default RegisterTransportSheet
