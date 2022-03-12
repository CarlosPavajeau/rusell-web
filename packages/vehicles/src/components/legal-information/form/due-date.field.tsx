import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleLegalInformationRequest } from '../../../models'

const DueDateField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { dueDate: dueDateError },
    },
  } = useFormContext<CreateVehicleLegalInformationRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Due date',
        description: 'Due date field',
      })}
      type="date"
      helperText={dueDateError?.message}
      helperColor={'error'}
      status={dueDateError ? 'error' : 'default'}
      width="100%"
      {...register('dueDate', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please select a due date',
            description: 'Error message for due date field',
          }),
        },
      })}
    />
  )
}

export default DueDateField
