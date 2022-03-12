import { Card, Spacer, Text } from '@nextui-org/react'
import { FC } from 'react'

import { Address } from '../../models'

type Props = {
  address: Address
}

const AddressItemModal: FC<Props> = ({ address }) => {
  return (
    <Card bordered clickable hoverable>
      <Card.Body>
        <Text h5>
          {address.country}, {address.state}, {address.city}
        </Text>
        <Text>
          {address.neighborhood}, {address.streetName} #{address.intersection} -{' '}
          {address.streetNumber}
        </Text>
        <Spacer y={0.5} />
        <Text small>{address.comments}</Text>
      </Card.Body>
    </Card>
  )
}

export default AddressItemModal
