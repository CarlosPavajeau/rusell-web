import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const ChassisNumberField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { chassisNumber: chassisNumberError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Chassis number',
        description: 'Chassis number field',
      })}
      helperText={chassisNumberError?.message}
      helperColor={'error'}
      status={chassisNumberError ? 'error' : 'default'}
      width="100%"
      {...register('chassisNumber', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a chassis number',
            description: 'Error message for chassis number field',
          }),
        },
      })}
    />
  )
}

export default ChassisNumberField
