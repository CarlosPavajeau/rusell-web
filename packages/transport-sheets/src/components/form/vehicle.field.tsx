import { Input } from '@nextui-org/react'
import InputSearchButton from '@rusell/shared/components/input-search.button'
import { Vehicle } from '@rusell/vehicles'
import VehicleSelectModal from '@rusell/vehicles/src/components/select-modal'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateTransportSheetRequest } from '../../models'

const VehicleField = () => {
  const intl = useIntl()
  const {
    register,
    setValue,
    watch,
    formState: {
      errors: { vehicleLicensePlate: vehicleLicensePlateError },
    },
  } = useFormContext<CreateTransportSheetRequest>()

  const [vehicle, setVehicle] = useState<Vehicle | undefined>(undefined)
  const [isVehicleSelectModalOpen, setIsVehicleSelectModalOpen] =
    useState(false)
  const handleSelectVehicle = (vehicle: Vehicle) => {
    setVehicle(vehicle)
    setValue('vehicleLicensePlate', vehicle.licensePlate)
    setValue('quota', vehicle.chairs)
    setIsVehicleSelectModalOpen(false)
  }
  const handleCancelSelectVehicle = () => {
    setIsVehicleSelectModalOpen(false)
  }

  return (
    <>
      <Input
        readOnly
        label={intl.formatMessage({
          defaultMessage: 'Vehicle',
          description: 'Vehicle field',
        })}
        value={vehicle ? vehicle.licensePlate : ''}
        helperText={vehicleLicensePlateError?.message}
        helperColor={'error'}
        status={vehicleLicensePlateError ? 'error' : 'default'}
        width="100%"
        contentRightStyling={false}
        contentRight={
          <InputSearchButton
            tooltipContent={
              <FormattedMessage defaultMessage="Search a vehicle" />
            }
            onClick={() => setIsVehicleSelectModalOpen(true)}
          />
        }
      />

      <Input
        hidden
        {...register('vehicleLicensePlate', {
          required: {
            value: true,
            message: intl.formatMessage({
              defaultMessage: 'Please select a vehicle',
              description: 'Error message for vehicle field',
            }),
          },
        })}
      />

      <VehicleSelectModal
        open={isVehicleSelectModalOpen}
        selectedVehicleLicensePlate={watch('vehicleLicensePlate')}
        onSelect={handleSelectVehicle}
        onCancel={handleCancelSelectVehicle}
      />
    </>
  )
}

export default VehicleField
