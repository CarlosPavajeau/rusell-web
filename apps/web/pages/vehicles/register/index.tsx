import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Card, CardContent, Container, Typography } from '@mui/material'
import axios from 'axios'
import { fetcher } from 'core/http/fetcher'
import { Employees, EmployeeType } from 'employees/models'
import NextHead from 'next/head'
import useSWR from 'swr'
import DashboardLayout from 'ui/layouts/DashboardLayout'
import VehicleForm from 'vehicles/components/VehicleForm'

const RegisterVehicle = () => {
  const {
    data: employees,
    error: employeeError,
    isValidating: employeeIsValidating,
  } = useSWR<Employees>('/api/employees/companies/123/employees', fetcher)

  const {
    data: drivers,
    error: driversError,
    isValidating: driversIsValidating,
  } = useSWR<Employees>(
    `/api/employees/companies/123/employees/by-type/${EmployeeType.Driver}`,
    fetcher,
  )

  if (employeeIsValidating || driversIsValidating) {
    return <div>Loading...</div>
  }

  if (employeeError || driversError) {
    return <div>failed to load employees</div>
  }

  const handleSubmit = async values => {
    await axios.post('/api/vehicles/companies/123/vehicles', values)
  }

  return (
    <>
      <NextHead>
        <title>Register Vehicle</title>
      </NextHead>

      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Register Vehicle
        </Typography>

        <Card sx={{ mt: 5 }}>
          <CardContent>
            <VehicleForm
              drivers={drivers || []}
              others={employees || []}
              onSubmit={handleSubmit}
            />
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

RegisterVehicle.Layout = DashboardLayout
export const getServerSideProps = withPageAuthRequired()

export default RegisterVehicle
