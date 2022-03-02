import { Card, Container, Spacer, Text } from '@nextui-org/react'
import axios from 'axios'
import { CompanyForm } from 'companies'
import NextHead from 'next/head'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const RegisterCompany = () => {
  const handleSubmit = async values => {
    await axios.post('/api/companies', values)
  }

  return (
    <>
      <NextHead>
        <title>Rusell | Register Company</title>
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
        <Card css={{ mw: '550px' }}>
          <Text h1>Register Company</Text>
          <Spacer y={2} />
          <CompanyForm onSubmit={handleSubmit} />
          <Spacer y={1} />
        </Card>
      </Container>
    </>
  )
}

export default RegisterCompany
