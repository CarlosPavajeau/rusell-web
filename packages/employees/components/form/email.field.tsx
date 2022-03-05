import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateEmployeeRequest } from '../../models'

const EmailField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { email: emailError },
    },
  } = useFormContext<CreateEmployeeRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Email',
        description: 'Email field',
      })}
      helperText={emailError?.message}
      helperColor="error"
      status={emailError ? 'error' : 'default'}
      width="100%"
      {...register('email', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter an email',
            description: 'Error message for email field',
          }),
        },
        pattern: {
          value: /^\S+@\S+$/i,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a valid email',
            description: 'Error message for email field',
          }),
        },
      })}
    />
  )
}

export default EmailField
