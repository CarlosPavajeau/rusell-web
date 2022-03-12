import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleLegalInformationRequest } from '../../../models'

const RenovationDateField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { renovationDate: renovationDateError },
    },
  } = useFormContext<CreateVehicleLegalInformationRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Renovation date',
        description: 'Renovation field',
      })}
      type="date"
      helperText={renovationDateError?.message}
      helperColor={'error'}
      status={renovationDateError ? 'error' : 'default'}
      width="100%"
      {...register('renovationDate', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please select a renovation date',
            description: 'Error message for renovation date field',
          }),
        },
      })}
    />
  )
}

export default RenovationDateField
