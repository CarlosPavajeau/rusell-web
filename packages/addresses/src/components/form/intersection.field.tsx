import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateAddressRequest } from '../../models'

const IntersectionField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { intersection: intersectionErrors },
    },
  } = useFormContext<CreateAddressRequest>()
  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Intersection',
        description: 'Intersection field',
      })}
      labelLeft="#"
      helperText={intersectionErrors?.message}
      helperColor="error"
      status={intersectionErrors ? 'error' : 'default'}
      width="100%"
      {...register('intersection', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter an intersection',
            description: 'Error message for intersection field',
          }),
        },
      })}
    />
  )
}

export default IntersectionField
