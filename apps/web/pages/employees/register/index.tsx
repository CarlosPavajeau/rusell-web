import { Text } from '@nextui-org/react'
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
