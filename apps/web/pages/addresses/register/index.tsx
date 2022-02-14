import { Card, CardContent, Container, Typography } from '@mui/material'
import AddressForm from 'addresses/components/AddressForm'
import axios from 'axios'
import NextHead from 'next/head'
import DashboardLayout from 'ui/layouts/DashboardLayout'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const RegisterAddress = () => {
  const handleSubmit = async values => {
    await axios.post('/api/addresses', values)
  }

  return (
    <>
      <NextHead>
        <title>Rusell | Register Address</title>
      </NextHead>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Register Address
        </Typography>

        <Card sx={{ mt: 5 }}>
          <CardContent>
            <AddressForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

RegisterAddress.Layout = DashboardLayout

export default RegisterAddress
