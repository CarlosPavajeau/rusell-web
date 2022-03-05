import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateParcelRequest } from '../../models'

const CostField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { cost: costError },
    },
  } = useFormContext<CreateParcelRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Cost',
        description: 'Cost field',
      })}
      type="number"
      helperText={costError?.message}
      helperColor={'error'}
      status={costError ? 'error' : 'default'}
      width="100%"
      {...register('cost', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a cost',
            description: 'Error message for cost field',
          }),
        },
      })}
    />
  )
}

export default CostField
