import { Textarea } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateParcelRequest } from '../../models'

const DescriptionField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { description: descriptionError },
    },
  } = useFormContext<CreateParcelRequest>()

  return (
    <Textarea
      label={intl.formatMessage({
        defaultMessage: 'Description',
        description: 'Description field',
      })}
      helperText={descriptionError?.message}
      helperColor="error"
      status={descriptionError ? 'error' : 'default'}
      width="100%"
      rows={4}
      {...register('description', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a description',
            description: 'Error message for description field',
          }),
        },
      })}
    />
  )
}

export default DescriptionField
