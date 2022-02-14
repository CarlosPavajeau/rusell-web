import { Card, CardContent, Container, Typography } from '@mui/material'
import axios from 'axios'
import ClientForm from 'clients/components/ClientForm'
import NextHead from 'next/head'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const RegisterClient = () => {
  const handleSubmit = async values => {
    await axios.post('/api/clients', values)
  }

  return (
    <>
      <NextHead>
        <title>Rusell | Register Client</title>
      </NextHead>
      <Container maxWidth="md">
        <Typography variant="h1" align="center" sx={{ mt: 10 }}>
          Register Client
        </Typography>

        <Card sx={{ mt: 5 }}>
          <CardContent>
            <ClientForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default RegisterClient
