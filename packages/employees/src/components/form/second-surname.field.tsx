import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateEmployeeRequest } from '../../models'

const SecondSurnameField = () => {
  const intl = useIntl()
  const { register } = useFormContext<CreateEmployeeRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Second surname',
        description: 'Second surname field',
      })}
      width="100%"
      {...register('secondSurname')}
    />
  )
}

export default SecondSurnameField
