import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateBankDraftRequest } from '../../models'

const AmountField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { amount: amountError },
    },
  } = useFormContext<CreateBankDraftRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Amount',
        description: 'Amount field',
      })}
      type="number"
      helperText={amountError?.message}
      helperColor={'error'}
      status={amountError ? 'error' : 'default'}
      width="100%"
      {...register('amount', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter an amount',
            description: 'Error message for amount field',
          }),
        },
      })}
    />
  )
}

export default AmountField
