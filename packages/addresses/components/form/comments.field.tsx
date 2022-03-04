import { Textarea } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateAddressRequest } from '../../models'

const CommentsField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { comments: commentsError },
    },
  } = useFormContext<CreateAddressRequest>()
  return (
    <Textarea
      label={intl.formatMessage({
        defaultMessage: 'Comments',
        description: 'Comments field',
      })}
      helperText={commentsError?.message}
      helperColor="error"
      status={commentsError ? 'error' : 'default'}
      width="100%"
      rows={4}
      {...register('comments', {
        required: {
          value: false,
          message: intl.formatMessage({
            defaultMessage: 'Please enter comments',
            description: 'Error message for comments field',
          }),
        },
      })}
    />
  )
}

export default CommentsField
