import { Card, CardContent, Container, Typography } from '@mui/material'
import axios from 'axios'
import useCompany from 'companies/hooks/useCompany'
import EmployeeForm from 'employees/components/EmployeeForm'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import DashboardLayout from 'ui/layouts/DashboardLayout'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const RegisterEmployee = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  })

  if (loadingCompany) {
    return <div>Loading...</div>
  }

  const handleSubmit = async values => {
    await axios.post(
      `/api/employees/companies/${company?.id}/employees`,
      values,
    )
    await router.push('/employees')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register employee',
          })}
        </title>
      </NextHead>

      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          <FormattedMessage defaultMessage="Register employee" />
        </Typography>

        <Card sx={{ mt: 5 }}>
          <CardContent>
            <EmployeeForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

RegisterEmployee.Layout = DashboardLayout

export default RegisterEmployee
