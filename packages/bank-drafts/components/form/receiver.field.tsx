import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateBankDraftRequest } from '../../models'

const ReceiverField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { receiverId: receiverError },
    },
  } = useFormContext<CreateBankDraftRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Receiver Id',
        description: 'Receiver Id field',
      })}
      helperText={receiverError?.message}
      helperColor={'error'}
      status={receiverError ? 'error' : 'default'}
      width="100%"
      {...register('receiverId', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a receiver id',
            description: 'Error message for receiver id field',
          }),
        },
      })}
    />
  )
}

export default ReceiverField
