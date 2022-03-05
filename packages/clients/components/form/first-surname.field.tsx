import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateClientRequest } from '../../models'

const FirstSurnameField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { firstSurname: firstSurnameError },
    },
  } = useFormContext<CreateClientRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'First surname',
        description: 'First surname field',
      })}
      helperText={firstSurnameError?.message}
      helperColor="error"
      status={firstSurnameError ? 'error' : 'default'}
      width="100%"
      {...register('firstSurname', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a first surname',
            description: 'Error message for first surname field',
          }),
        },
      })}
    />
  )
}

export default FirstSurnameField
