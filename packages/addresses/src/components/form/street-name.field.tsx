import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateAddressRequest } from '../../models'

const StreetNameField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { streetName: streetNameErrors },
    },
  } = useFormContext<CreateAddressRequest>()
  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Street name',
        description: 'Street name field',
      })}
      helperText={streetNameErrors?.message}
      helperColor="error"
      status={streetNameErrors ? 'error' : 'default'}
      width="100%"
      {...register('streetName', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a street name',
            description: 'Error message for street name field',
          }),
        },
      })}
    />
  )
}

export default StreetNameField
