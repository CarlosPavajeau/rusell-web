import { Card, Container, Spacer, Text } from '@nextui-org/react'
import AddressForm from 'addresses/components/AddressForm'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import DashboardLayout from 'ui/layouts/DashboardLayout'
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
        <Card>
          <Text h2>
            <FormattedMessage defaultMessage="Register address" />
          </Text>
          <AddressForm onSubmit={handleSubmit} />
          <Spacer y={1} />
        </Card>
      </Container>
    </>
  )
}

RegisterAddress.Layout = DashboardLayout

export default RegisterAddress
