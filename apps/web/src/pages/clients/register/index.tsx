import { Container, Spacer, Text } from '@nextui-org/react'
import { ClientForm } from '@rusell/clients'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const RegisterClient = () => {
  const router = useRouter()
  const intl = useIntl()

  const handleSubmit = async values => {
    await axios.post('/api/clients', values)
    await router.push('/')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register client',
          })}
        </title>
      </NextHead>
      <Container
        alignItems="center"
        css={{
          margin: 'auto',
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Container sm>
          <Text h3>
            <FormattedMessage defaultMessage="Register client" />
          </Text>

          <Spacer y={1} />

          <ClientForm onSubmit={handleSubmit} />
        </Container>
      </Container>
    </>
  )
}

export default RegisterClient
