import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateAddressRequest } from '../../models'

const CityField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { city: cityErrors },
    },
  } = useFormContext<CreateAddressRequest>()
  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'City',
        description: 'City field',
      })}
      helperText={cityErrors?.message}
      helperColor="error"
      status={cityErrors ? 'error' : 'default'}
      width="100%"
      {...register('city', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a city',
            description: 'Error message for city field',
          }),
        },
      })}
    />
  )
}

export default CityField
