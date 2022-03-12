import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateCompanyRequest } from '../../models'

const NitField = () => {
  const intl = useIntl()
  const { register } = useFormContext<CreateCompanyRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Nit',
        description: 'Nit field',
      })}
      width="100%"
      {...register('nit')}
    />
  )
}

export default NitField
