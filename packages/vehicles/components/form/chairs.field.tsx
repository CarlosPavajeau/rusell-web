import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const ChairsField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { chairs: chairsError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Chairs',
        description: 'Chairs field',
      })}
      type="number"
      helperText={chairsError?.message}
      helperColor={'error'}
      status={chairsError ? 'error' : 'default'}
      width="100%"
      {...register('chairs', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a number of chairs',
            description: 'Error message for chairs field',
          }),
        },
      })}
    />
  )
}

export default ChairsField
