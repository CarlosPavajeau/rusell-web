import { Input } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../../models'

const ColorField = () => {
  const intl = useIntl()
  const {
    register,
    formState: {
      errors: { color: colorError },
    },
  } = useFormContext<CreateVehicleRequest>()

  return (
    <Input
      label={intl.formatMessage({
        defaultMessage: 'Color',
        description: 'Color field',
      })}
      helperText={colorError?.message}
      helperColor={'error'}
      status={colorError ? 'error' : 'default'}
      width="100%"
      {...register('color', {
        required: {
          value: true,
          message: intl.formatMessage({
            defaultMessage: 'Please enter a color',
            description: 'Error message for color field',
          }),
        },
      })}
    />
  )
}

export default ColorField
