import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DashboardLayout from '@layouts/dashboard'
import { Container, Grid, Spacer, Text } from '@nextui-org/react'
import type { Address } from '@rusell/addresses'
import { AddressCard } from '@rusell/addresses'
import { fetcher } from '@rusell/shared/http/fetcher'
import NextHead from 'next/head'
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

const Addresses = () => {
  const intl = useIntl()
  const { data, isValidating } = useSWR<Address[]>('/api/addresses', fetcher)

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Addresses',
          })}
        </title>
      </NextHead>

      <Container md>
        <Text h2>
          <FormattedMessage defaultMessage="Addresses" />
        </Text>

        <Spacer y={1} />

        {isValidating && <div>Loading...</div>}

        {!isValidating && data && data.length > 0 ? (
          <Grid.Container gap={2}>
            {data.map(address => (
              <Grid xs={12} md={6} key={address.id}>
                <AddressCard address={address} />
              </Grid>
            ))}
          </Grid.Container>
        ) : (
          <Text h5>
            <FormattedMessage defaultMessage="No addresses found" />
          </Text>
        )}
      </Container>
    </>
  )
}

export default withLayout(withPageAuthRequired(Addresses), DashboardLayout)
