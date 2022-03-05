import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateBankDraftRequest } from '../../models'

const SenderField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { senderId: senderError },
    },
  } = useFormContext<CreateBankDraftRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Sender Id',
        description: 'Sender Id field',
      })}
      helperText={senderError?.message}
      helperColor={'error'}
      status={senderError ? 'error' : 'default'}
      width="100%"
      {...register('senderId', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a sender id',
            description: 'Error message for sender id field',
          }),
        },
      })}
    />
  )
}

export default SenderField
