import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateTicketRequest } from '../../models'

const ClientField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { clientId: clientError },
    },
  } = useFormContext<CreateTicketRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Client id',
        description: 'Client id field',
      })}
      helperText={clientError?.message}
      helperColor={'error'}
      status={clientError ? 'error' : 'default'}
      width="100%"
      {...register('clientId', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a client id',
            description: 'Error message for client id field',
          }),
        },
      })}
    />
  )
}

export default ClientField
