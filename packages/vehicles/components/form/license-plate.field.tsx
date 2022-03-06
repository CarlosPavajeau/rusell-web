import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const LicensePlateField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { licensePlate: licensePlateError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'License plate',
        description: 'License plate field',
      })}
      helperText={licensePlateError?.message}
      helperColor={'error'}
      status={licensePlateError ? 'error' : 'default'}
      width="100%"
      {...register('licensePlate', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a license plate',
            description: 'Error message for license plate field',
          }),
        },
        pattern: {
          value: /^[A-Z]{3}-[0-9]{3}$/,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a valid license plate (e.g. ABC-123)',
            description: 'Error message for license plate field',
          }),
        },
      })}
    />
  )
}

export default LicensePlateField
