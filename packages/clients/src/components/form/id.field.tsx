import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateClientRequest } from '../../models'

const IdField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { id: idError },
    },
  } = useFormContext<CreateClientRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Id',
        description: 'Id field',
      })}
      helperText={idError?.message}
      helperColor="error"
      status={idError ? 'error' : 'default'}
      width="100%"
      {...register('id', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter an id',
            description: 'Error message for id field',
          }),
        },
      })}
    />
  )
}

export default IdField
