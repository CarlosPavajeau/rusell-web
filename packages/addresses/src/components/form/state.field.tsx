import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateAddressRequest } from '../../models'

const StateField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { state: stateErrors },
    },
  } = useFormContext<CreateAddressRequest>()
  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'State',
        description: 'State field',
      })}
      helperText={stateErrors?.message}
      helperColor="error"
      status={stateErrors ? 'error' : 'default'}
      width="100%"
      {...register('state', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a state',
            description: 'Error message for state field',
          }),
        },
      })}
    />
  )
}

export default StateField
