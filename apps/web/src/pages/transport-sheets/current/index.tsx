import DashboardLayout from '@layouts/dashboard'
import { Spacer, Text } from '@nextui-org/react'
import { useCompany } from '@rusell/companies'
import { fetcher } from '@rusell/shared/http/fetcher'
import { TransportSheet } from '@rusell/transport-sheets'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import useSWR from 'swr'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

const CurrentTransportSheetPage = () => {
  const [company, loadingCompany, companyError] = useCompany()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (companyError) {
      router.push('/companies/register')
    }
  }, [companyError, router])

  const { data: currentTransportSheet, isValidating } = useSWR<TransportSheet>(
    company
      ? `/api/transport-sheets/companies/${company.id}/transport-sheets/current`
      : null,
    fetcher,
  )

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Transport Sheet',
          })}
        </title>
      </NextHead>

      <Text h3>
        <FormattedMessage defaultMessage="Transport sheet" />
      </Text>

      <Spacer y={1} />

      {(isValidating || loadingCompany) && <p>Loading...</p>}

      <Text h5>{currentTransportSheet.id}</Text>
      <Text h6>{currentTransportSheet.date}</Text>
    </>
  )
}

CurrentTransportSheetPage.Layout = DashboardLayout

export default CurrentTransportSheetPage
