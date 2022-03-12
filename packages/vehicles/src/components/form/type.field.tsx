import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const TypeField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { type: typeError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Type',
        description: 'Type field',
      })}
      helperText={typeError?.message}
      helperColor={'error'}
      status={typeError ? 'error' : 'default'}
      width="100%"
      {...register('type', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a type',
            description: 'Error message for type field',
          }),
        },
      })}
    />
  )
}

export default TypeField
