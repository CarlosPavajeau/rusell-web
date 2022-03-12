import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const ModelField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { model: modelError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Model',
        description: 'Model field',
      })}
      helperText={modelError?.message}
      helperColor={'error'}
      status={modelError ? 'error' : 'default'}
      width="100%"
      {...register('model', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a model',
            description: 'Error message for model field',
          }),
        },
      })}
    />
  )
}

export default ModelField
