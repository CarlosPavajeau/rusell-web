import { Card, Spacer, Text } from '@nextui-org/react'
import { FC } from 'react'

import { Address } from '../../models'

type Props = {
  address: Address
}

const AddressCard: FC<Props> = ({ address }) => {
  return (
    <Card css={{ minWidth: '300px' }}>
      <Card.Body>
        <Text h4>
          {address.country}, {address.state}, {address.city}
        </Text>
        <Text>
          {address.neighborhood}, {address.streetName} #{address.intersection} -{' '}
          {address.streetNumber}
        </Text>
        <Spacer y={0.5} />
        <Text small color="rgb(102, 102, 102)">
          {address.comments}
        </Text>
      </Card.Body>
    </Card>
  )
}

export default AddressCard
