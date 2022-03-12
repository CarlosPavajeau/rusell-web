import { Checkbox } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateRouteRequest } from '../../models'

const IsCustomerPickedUpAtHomeField = () => {
  const { register, setValue } = useFormContext<CreateRouteRequest>()

  return (
    <Checkbox
      {...register('isCustomerPickedUpAtHome')}
      onChange={e => setValue('isCustomerPickedUpAtHome', e.target.checked)}
    >
      <FormattedMessage
        defaultMessage="Is customer picked up at home?"
        description="Customer picked up at home checkbox"
      />
    </Checkbox>
  )
}

export default IsCustomerPickedUpAtHomeField
