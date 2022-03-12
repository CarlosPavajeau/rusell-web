import { Container, Spacer, Text } from '@nextui-org/react'
import { AddressForm } from '@rusell/addresses'
import DashboardLayout from '@rusell/ui/layouts/DashboardLayout'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const RegisterAddress = () => {
  const router = useRouter()
  const intl = useIntl()

  const handleSubmit = async values => {
    await axios.post('/api/addresses', values)
    await router.push('/addresses')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register address',
          })}
        </title>
      </NextHead>
      <Container md>
        <Text h2>
          <FormattedMessage defaultMessage="Register address" />
        </Text>

        <Spacer y={1} />

        <AddressForm onSubmit={handleSubmit} />
      </Container>
    </>
  )
}

RegisterAddress.Layout = DashboardLayout

export default RegisterAddress
