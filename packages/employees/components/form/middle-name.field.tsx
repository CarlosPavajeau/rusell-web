import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateEmployeeRequest } from '../../models'

const MiddleNameField = () => {
  const intl = useIntl()
  const { register } = useFormContext<CreateEmployeeRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Middle name',
        description: 'Middle name field',
      })}
      width="100%"
      {...register('middleName')}
    />
  )
}

export default MiddleNameField
