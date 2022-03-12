import { Card, Spacer, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import { Route } from '../../models'

type Props = {
  route: Route
}

const RouteSelectItem: FC<Props> = ({ route }) => {
  return (
    <Card bordered clickable hoverable>
      <Card.Body>
        <Text h5>
          <FormattedMessage defaultMessage="From" /> {route.from}
        </Text>
        <Text h5>
          <FormattedMessage defaultMessage="To" /> {route.to}
        </Text>

        <Spacer y={0.5} />

        <Text h6>
          <FormattedMessage defaultMessage="Cost" /> {route.cost}
        </Text>

        <Text small>
          <FormattedMessage defaultMessage="Is customer dropped off at home?" />{' '}
          {route.isCustomerDroppedOffAtHome ? (
            <FormattedMessage defaultMessage="Yes" />
          ) : (
            <FormattedMessage defaultMessage="No" />
          )}
        </Text>

        <Text small>
          <FormattedMessage defaultMessage="Is customer picked up at home?" />{' '}
          {route.isCustomerPickedUpAtHome ? (
            <FormattedMessage defaultMessage="Yes" />
          ) : (
            <FormattedMessage defaultMessage="No" />
          )}
        </Text>
      </Card.Body>
    </Card>
  )
}

export default RouteSelectItem
