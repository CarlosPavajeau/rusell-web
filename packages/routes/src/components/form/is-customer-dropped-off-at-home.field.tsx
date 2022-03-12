import { Checkbox } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateRouteRequest } from '../../models'

const IsCustomerDroppedOffAtHomeField = () => {
  const { register, setValue } = useFormContext<CreateRouteRequest>()

  return (
    <Checkbox
      {...register('isCustomerDroppedOffAtHome')}
      onChange={e => setValue('isCustomerDroppedOffAtHome', e.target.checked)}
    >
      <FormattedMessage
        defaultMessage="Is customer dropped off at home?"
        description="Customer dropped off at home checkbox"
      />
    </Checkbox>
  )
}

export default IsCustomerDroppedOffAtHomeField
