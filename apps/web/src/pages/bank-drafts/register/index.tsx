import DashboardLayout from '@layouts/dashboard'
import { Container, Spacer, Text } from '@nextui-org/react'
import { BankDraftForm } from '@rusell/bank-drafts'
import { useCompany } from '@rusell/companies'
import axios from 'axios'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const RegisterBankDraft = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [companyError, router])

  const handleSubmit = async values => {
    await axios.post(
      `/api/bank-drafts/companies/${company.id}/bank-drafts`,
      values,
    )
    await router.push('/')
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Register bank draft',
          })}
        </title>
      </NextHead>

      {loadingCompany && <div>Loading...</div>}

      {company && (
        <Container md>
          <Text h2>
            <FormattedMessage defaultMessage="Register bank draft" />
          </Text>

          <Spacer y={1} />

          <BankDraftForm onSubmit={handleSubmit} />
        </Container>
      )}
    </>
  )
}

RegisterBankDraft.Layout = DashboardLayout

export default RegisterBankDraft
