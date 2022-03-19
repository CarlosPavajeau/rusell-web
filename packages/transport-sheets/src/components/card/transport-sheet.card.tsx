import { Card, Grid, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import { TransportSheet } from '../../models'

type Props = {
  transportSheet: TransportSheet
}

const TransportSheetCard: FC<Props> = ({ transportSheet }) => {
  const intl = useIntl()

  return (
    <Card>
      <Card.Header>
        <Text b h3 margin="0 auto">
          <FormattedMessage defaultMessage="Basic information" />
        </Text>
      </Card.Header>
      <Card.Body>
        <Grid.Container gap={0.5}>
          <Grid xs={12} md={6}>
            <Text h4 weight="normal">
              <FormattedMessage defaultMessage="Date" />
              {': '}
              {intl.formatDate(transportSheet.date, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
            </Text>
          </Grid>

          <Grid xs={12} md={6}>
            <Text h4 weight="normal">
              <FormattedMessage defaultMessage="Vehicle" />
              {': '}
              {transportSheet.vehicleLicensePlate}
            </Text>
          </Grid>

          <Grid xs={12} md={6}>
            <Text h4 weight="normal">
              <FormattedMessage defaultMessage="Quota" />
              {': '} {transportSheet.quota}
            </Text>
          </Grid>

          <Grid xs={12} md={6}>
            <Text h4 weight="normal">
              <FormattedMessage defaultMessage="Dispatcher" />
              {': '}
              {transportSheet.dispatcherName}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Body>

      <Card.Footer>
        <Text>
          <FormattedMessage defaultMessage="Id" />
          {': '}
          {transportSheet.id}
        </Text>
      </Card.Footer>
    </Card>
  )
}

export default TransportSheetCard
