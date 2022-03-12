import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateParcelRequest } from '../../models'

const VehicleField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { vehicleLicensePlate: vehicleLicensePlateError },
    },
  } = useFormContext<CreateParcelRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Vehicle license plate',
        description: 'Vehicle license field',
      })}
      helperText={vehicleLicensePlateError?.message}
      helperColor={'error'}
      status={vehicleLicensePlateError ? 'error' : 'default'}
      width="100%"
      {...register('vehicleLicensePlate', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a vehicle license plate',
            description: 'Error message for vehicle license plate',
          }),
        },
      })}
    />
  )
}

export default VehicleField
