import { Modal, Text } from '@nextui-org/react'
import { useCompany } from '@rusell/companies'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import useVehicles from '../../hooks/use-vehicles'
import { Vehicle } from '../../models'
import VehicleSelectItem from './vehicle-select.item'

type Props = {
  open: boolean
  selectedVehicleLicensePlate?: string

  onSelect: (vehicle: Vehicle) => void
  onCancel: () => void
}

const VehicleSelectModal: FC<Props> = ({
  open,
  selectedVehicleLicensePlate,
  onSelect,
  onCancel,
}) => {
  const [company] = useCompany()
  const [vehicles, loading, error] = useVehicles(company?.id)

  return (
    <Modal closeButton blur open={open} onClose={onCancel}>
      <Modal.Header>
        <Text h3>
          <FormattedMessage defaultMessage="Select Vehicle" />
        </Text>
      </Modal.Header>

      <Modal.Body>
        {loading && <Text>Loading...</Text>}

        {error && <Text>Error: {error.message}</Text>}

        {!loading && !error && (
          <ul>
            {vehicles?.map(vehicle => {
              if (
                selectedVehicleLicensePlate !== undefined &&
                vehicle.licensePlate === selectedVehicleLicensePlate
              ) {
                return null
              }

              return (
                <li
                  key={vehicle.licensePlate}
                  onClick={() => onSelect(vehicle)}
                >
                  <VehicleSelectItem vehicle={vehicle} />
                </li>
              )
            })}
          </ul>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default VehicleSelectModal
