import { Text } from '@nextui-org/react'
import { useCompany } from '@rusell/companies'
import { EmployeeForm } from '@rusell/employees'
import DashboardLayout from '@rusell/ui/layouts/DashboardLayout'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
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

      {loadingCompany && <div>Loading...</div>}
      {!loadingCompany && (
        <>
          <Text h2>
            <FormattedMessage defaultMessage="Register employee" />
          </Text>

          <EmployeeForm onSubmit={handleSubmit} />
        </>
      )}
    </>
  )
}

RegisterEmployee.Layout = DashboardLayout

export default RegisterEmployee
