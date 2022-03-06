import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateTicketRequest } from '../../models'

const SeatsField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { seats: seatsError },
    },
  } = useFormContext<CreateTicketRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Seats',
        description: 'Seats field',
      })}
      type="number"
      helperText={seatsError?.message}
      helperColor={'error'}
      status={seatsError ? 'error' : 'default'}
      width="100%"
      {...register('seats', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter the number of seats',
            description: 'Error message for seats field',
          }),
        },
      })}
    />
  )
}

export default SeatsField
