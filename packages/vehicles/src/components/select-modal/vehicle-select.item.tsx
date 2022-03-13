import { Card, Spacer, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import { Vehicle } from '../../models'

type Props = {
  vehicle: Vehicle
}

const VehicleSelectItem: FC<Props> = ({ vehicle }) => {
  return (
    <Card bordered clickable hoverable>
      <Card.Body>
        <Text h5>{vehicle.licensePlate}</Text>
        <Text h5>
          <FormattedMessage defaultMessage="Type " />
          {vehicle.type}
        </Text>
        <Text h5>
          <FormattedMessage defaultMessage="Driver " />
          {vehicle.driverName}
        </Text>

        <Spacer y={0.5} />

        <Text h6>
          <FormattedMessage defaultMessage="Model" /> {vehicle.model}
        </Text>
        <Text h6>
          <FormattedMessage defaultMessage="Chairs" /> {vehicle.chairs}
        </Text>
      </Card.Body>
    </Card>
  )
}

export default VehicleSelectItem
