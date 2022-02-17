import { Card, CardContent, Container, Typography } from '@mui/material'
import axios from 'axios'
import useCompany from 'companies/hooks/useCompany'
import { fetcher } from 'core/http/fetcher'
import { Employees, EmployeeType } from 'employees/models'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'
import DashboardLayout from 'ui/layouts/DashboardLayout'
import withAuthAndi18n from 'utils/withAuthAndi18n'
import VehicleForm from 'vehicles/components/VehicleForm'

export const getServerSideProps = withAuthAndi18n

const RegisterVehicle = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()

  console.log(company)

  const {
    data: employees,
    error: employeeError,
    isValidating: employeeIsValidating,
  } = useSWR<Employees>(
    company !== null
      ? `/api/employees/companies/${company.id}/employees`
      : null,
    fetcher,
  )

  const {
    data: drivers,
    error: driversError,
    isValidating: driversIsValidating,
  } = useSWR<Employees>(
    company !== null
      ? `/api/employees/companies/${company.id}/employees/by-type/${EmployeeType.Driver}`
      : null,
    fetcher,
  )

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [router, companyError])

  if (loadingCompany) {
    return <div>Loading company...</div>
  }

  if (employeeIsValidating || driversIsValidating) {
    return <div>Loading...</div>
  }

  if (employeeError || driversError || companyError) {
    return <div>failed to load data</div>
  }

  const handleSubmit = async values => {
    await axios.post(`/api/vehicles/companies/${company.id}/vehicles`, values)
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

export default RegisterVehicle
