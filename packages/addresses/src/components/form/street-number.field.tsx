import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateAddressRequest } from '../../models'

const StreetNumberField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { streetNumber: streetNumberError },
    },
  } = useFormContext<CreateAddressRequest>()
  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Street number',
        description: 'Street number field',
      })}
      labelLeft="-"
      helperText={streetNumberError?.message}
      helperColor="error"
      status={streetNumberError ? 'error' : 'default'}
      width="100%"
      {...register('streetNumber', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a street number',
            description: 'Error message for street number field',
          }),
        },
      })}
    />
  )
}

export default StreetNumberField
