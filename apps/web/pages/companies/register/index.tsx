import { Container, Spacer, Text } from '@nextui-org/react'
import { CompanyForm } from '@rusell/companies'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const RegisterCompany = () => {
  const router = useRouter()
  const intl = useIntl()

  const handleSubmit = async values => {
    await axios.post('/api/companies', values)
    await router.push('/')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register company',
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
        <Container xs>
          <Text h3>
            <FormattedMessage defaultMessage="Register company" />
          </Text>

          <Spacer y={1} />

          <CompanyForm onSubmit={handleSubmit} />
        </Container>
      </Container>
    </>
  )
}

export default RegisterCompany
