import { Modal, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import useRoutes from '../../hooks/use-routes'
import { Route } from '../../models'
import RouteSelectItem from './route-select.item'

type Props = {
  open: boolean
  selectedRouteId?: string

  onSelect: (route: Route) => void
  onCancel: () => void
}

const RouteSelectModal: FC<Props> = ({
  open,
  selectedRouteId,
  onSelect,
  onCancel,
}) => {
  const [routes, loading, error] = useRoutes()

  return (
    <Modal closeButton blur open={open} onClose={onCancel}>
      <Modal.Header>
        <Text h3>
          <FormattedMessage defaultMessage="Select Route" />
        </Text>
      </Modal.Header>

      <Modal.Body>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {!loading && !error && (
          <ul>
            {routes?.map(route => {
              if (
                selectedRouteId !== undefined &&
                route.id === selectedRouteId
              ) {
                return null
              }

              return (
                <li key={route.id} onClick={() => onSelect(route)}>
                  <RouteSelectItem route={route} />
                </li>
              )
            })}
          </ul>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default RouteSelectModal
