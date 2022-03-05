import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateClientRequest } from '../../models'

const PhoneNumberField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { phoneNumber: phoneNumberError },
    },
  } = useFormContext<CreateClientRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Phone number',
        description: 'Phone number field',
      })}
      helperText={phoneNumberError?.message}
      helperColor="error"
      status={phoneNumberError ? 'error' : 'default'}
      width="100%"
      {...register('phoneNumber', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a phone number',
            description: 'Error message for phone number field',
          }),
        },
        pattern: {
          value: /^\+?[0-9]{10,15}$/i,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a valid phone number',
            description: 'Error message for phone number field',
          }),
        },
      })}
    />
  )
}

export default PhoneNumberField
