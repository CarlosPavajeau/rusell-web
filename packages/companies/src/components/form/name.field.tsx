import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateCompanyRequest } from '../../models'

const NameField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { name: nameError },
    },
  } = useFormContext<CreateCompanyRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Name',
        description: 'Name field',
      })}
      helperText={nameError?.message}
      helperColor="error"
      status={nameError ? 'error' : 'default'}
      width="100%"
      {...register('name', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a name',
            description: 'Error message for name field',
          }),
        },
      })}
    />
  )
}

export default NameField
