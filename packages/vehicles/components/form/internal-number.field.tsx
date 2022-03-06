import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const InternalNumberField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { internalNumber: internalNumberError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Internal number',
        description: 'Internal number field',
      })}
      helperText={internalNumberError?.message}
      helperColor={'error'}
      status={internalNumberError ? 'error' : 'default'}
      width="100%"
      {...register('internalNumber', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter an internal number',
            description: 'Error message for internal number field',
          }),
        },
      })}
    />
  )
}

export default InternalNumberField
