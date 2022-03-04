import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateAddressRequest } from '../../models'

const CountryField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { country: countryErrors },
    },
  } = useFormContext<CreateAddressRequest>()
  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Country',
        description: 'Country field',
      })}
      helperText={countryErrors?.message}
      helperColor="error"
      status={countryErrors ? 'error' : 'default'}
      width="100%"
      {...register('country', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a country',
            description: 'Error message for country field',
          }),
        },
      })}
    />
  )
}

export default CountryField
