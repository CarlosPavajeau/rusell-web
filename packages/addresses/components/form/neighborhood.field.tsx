import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateAddressRequest } from '../../models'

const NeighborhoodField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { neighborhood: neighborhoodErrors },
    },
  } = useFormContext<CreateAddressRequest>()
  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Neighborhood',
        description: 'Neighborhood field',
      })}
      helperText={neighborhoodErrors?.message}
      helperColor="error"
      status={neighborhoodErrors ? 'error' : 'default'}
      width="100%"
      {...register('neighborhood', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a neighborhood',
            description: 'Error message for neighborhood field',
          }),
        },
      })}
    />
  )
}

export default NeighborhoodField
