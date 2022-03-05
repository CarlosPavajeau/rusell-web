import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateCompanyRequest } from '../../models'

const InfoField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { info: infoError },
    },
  } = useFormContext<CreateCompanyRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Info',
        description: 'Info field',
      })}
      helperText={infoError?.message}
      helperColor="error"
      status={infoError ? 'error' : 'default'}
      width="100%"
      {...register('info', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter an info',
            description: 'Error message for info field',
          }),
        },
      })}
    />
  )
}

export default InfoField
