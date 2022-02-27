import { Container, Stack, Typography } from '@mui/material'
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

  if (isValidating) {
    return <div>Loading...</div>
  }

  return (
    <>
      <NextHead>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Addresses',
          })}
        </title>
      </NextHead>

      <Typography variant="h3" align="center" sx={{ mb: 5 }}>
        <FormattedMessage defaultMessage="Addresses" />
      </Typography>

      <Container maxWidth="md">
        {data && data.length > 0 ? (
          <Stack
            spacing={2}
            direction={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="center"
          >
            {data.map(address => (
              <AddressCard address={address} key={address.id} />
            ))}
          </Stack>
        ) : (
          <Typography variant="body1" align="center">
            <FormattedMessage defaultMessage="No addresses found" />
          </Typography>
        )}
      </Container>
    </>
  )
}

Addresses.Layout = DashboardLayout

export default Addresses
