import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Card, CardContent, Container, Typography } from '@mui/material'
import axios from 'axios'
import { CompanyForm } from 'companies'
import NextHead from 'next/head'

const RegisterCompany = () => {
  const handleSubmit = async values => {
    await axios.post('/api/companies', values)
  }

  return (
    <>
      <NextHead>
        <title>Rusell | Register Company</title>
      </NextHead>
      <Container maxWidth="md">
        <Typography variant="h1" align="center" sx={{ mt: 10 }}>
          Register Company
        </Typography>

        <Card sx={{ mt: 5 }}>
          <CardContent>
            <CompanyForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()

export default RegisterCompany
