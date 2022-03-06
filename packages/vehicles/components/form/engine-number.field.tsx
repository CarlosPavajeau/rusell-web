import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const EngineNumberField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { engineNumber: engineNumberError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Engine number',
        description: 'Engine number field',
      })}
      helperText={engineNumberError?.message}
      helperColor={'error'}
      status={engineNumberError ? 'error' : 'default'}
      width="100%"
      {...register('engineNumber', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a engine number',
            description: 'Error message for engine number field',
          }),
        },
      })}
    />
  )
}

export default EngineNumberField
