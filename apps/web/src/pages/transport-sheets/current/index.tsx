import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@layouts/dashboard'
import { Spacer, Text } from '@nextui-org/react'
import { useCurrentEmployee } from '@rusell/employees'
import { fetcher } from '@rusell/shared/http/fetcher'
import { TransportSheet } from '@rusell/transport-sheets'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import useSWR from 'swr'
import loadI18nMessages from 'utils/i18n/loadIntlMessages'
import withLayout from 'utils/with-layout'

export const getStaticProps = async context => {
  return {
    props: {
      intlMessages: await loadI18nMessages({
        locale: context.locale,
        defaultLocale: context.defaultLocale,
      }),
    },
  }
}

const CurrentTransportSheetPage = () => {
  const [dispatcher, loadingDispatcher, dispatcherError] = useCurrentEmployee()
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    if (dispatcherError) {
      router.push('/')
    }
  }, [dispatcherError, router])

  const { data: currentTransportSheet, isValidating } = useSWR<
    TransportSheet | undefined
  >(
    dispatcher
      ? `/api/transport-sheets/companies/${dispatcher.companyId}/transport-sheets/current`
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

      {(isValidating || loadingDispatcher) && <p>Loading...</p>}

      <Text h5>{currentTransportSheet?.id}</Text>
      <Text h6>{intl.formatDate(currentTransportSheet?.date)}</Text>
    </>
  )
}

export default withLayout(
  withPageAuthRequired(CurrentTransportSheetPage),
  DashboardLayout,
)
