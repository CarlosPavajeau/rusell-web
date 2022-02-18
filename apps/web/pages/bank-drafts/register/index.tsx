import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import BankDraftForm from 'bank-drafts/components/BankDraftForm'
import useCompany from 'companies/hooks/useCompany'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import DashboardLayout from 'ui/layouts/DashboardLayout'
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
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            <FormattedMessage defaultMessage="Register bank draft" />
          </Typography>

          <Card sx={{ mt: 5 }}>
            <CardContent>
              <BankDraftForm
                onSubmit={handleSubmit}
                clients={[]}
                dispatcherId="123"
              />
            </CardContent>
          </Card>
        </Container>
      )}
    </>
  )
}

RegisterBankDraft.Layout = DashboardLayout

export default RegisterBankDraft
