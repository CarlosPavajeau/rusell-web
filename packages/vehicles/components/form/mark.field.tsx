import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const MarkField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { mark: markError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Mark',
        description: 'Mark field',
      })}
      helperText={markError?.message}
      helperColor={'error'}
      status={markError ? 'error' : 'default'}
      width="100%"
      {...register('mark', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a mark',
            description: 'Error message for mark field',
          }),
        },
      })}
    />
  )
}

export default MarkField
