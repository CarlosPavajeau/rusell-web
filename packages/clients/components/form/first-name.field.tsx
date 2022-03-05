import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateClientRequest } from '../../models'

const FirstNameField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { firstName: firstNameError },
    },
  } = useFormContext<CreateClientRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'First name',
        description: 'First name field',
      })}
      helperText={firstNameError?.message}
      helperColor="error"
      status={firstNameError ? 'error' : 'default'}
      width="100%"
      {...register('firstName', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a first name',
            description: 'Error message for first name field',
          }),
        },
      })}
    />
  )
}

export default FirstNameField
