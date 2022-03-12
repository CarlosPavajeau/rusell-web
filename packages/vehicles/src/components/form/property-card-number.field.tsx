import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const PropertyCardNumberField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { propertyCard: propertyCardError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Property card number',
        description: 'Property card number field',
      })}
      helperText={propertyCardError?.message}
      helperColor={'error'}
      status={propertyCardError ? 'error' : 'default'}
      width="100%"
      {...register('propertyCard', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a property card number',
            description: 'Error message for property card number field',
          }),
        },
      })}
    />
  )
}

export default PropertyCardNumberField
