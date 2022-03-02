import { Container, Grid, Spacer, Text } from '@nextui-org/react'
import AddressCard from 'addresses/components/AddressCard'
import { Address } from 'addresses/models'
import { fetcher } from 'core/http/fetcher'
import NextHead from 'next/head'
import { FormattedMessage, useIntl } from 'react-intl'
import useSWR from 'swr'
import DashboardLayout from 'ui/layouts/DashboardLayout'
import withAuthAndi18n from 'utils/withAuthAndi18n'

export const getServerSideProps = withAuthAndi18n

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

Addresses.Layout = DashboardLayout

export default Addresses
