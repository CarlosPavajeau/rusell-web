import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const ModelNumberField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { modelNumber: modelNumberError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Model number',
        description: 'Model number field',
      })}
      helperText={modelNumberError?.message}
      helperColor={'error'}
      status={modelNumberError ? 'error' : 'default'}
      width="100%"
      {...register('modelNumber', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a model number',
            description: 'Error message for model number field',
          }),
        },
      })}
    />
  )
}

export default ModelNumberField
