import { Card, Grid, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import { TransportSheet } from '../../models'

type Props = {
  transportSheet: TransportSheet
}

const TransportSheetCard: FC<Props> = ({ transportSheet }) => {
  return (
    <Card>
      <Card.Header>
        <Text h2>
          <FormattedMessage defaultMessage="Id" /> {transportSheet.id}
        </Text>
      </Card.Header>

      <Card.Body>
        <Grid.Container gap={1.5}>
          <Grid xs>
            <Text h3>
              <FormattedMessage defaultMessage="Date" /> {transportSheet.date}
            </Text>
          </Grid>

          <Grid xs>
            <Text h3>
              <FormattedMessage defaultMessage="Vehicle" />{' '}
              {transportSheet.vehicleLicensePlate}
            </Text>
          </Grid>

          <Grid xs>
            <Text h5>
              <FormattedMessage defaultMessage="Quota" /> {transportSheet.quota}
            </Text>
          </Grid>

          <Grid xs>
            <Text h6>
              <FormattedMessage defaultMessage="Dispatcher" />{' '}
              {transportSheet.dispatcherName}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  )
}

export default TransportSheetCard
