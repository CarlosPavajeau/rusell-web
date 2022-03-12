import { Radio, Spacer, Text } from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateEmployeeRequest, EmployeeType } from '../../models'

const EmployeeTypeField = () => {
  const intl = useIntl()
  const { setValue, watch } = useFormContext<CreateEmployeeRequest>()

  return (
    <>
      <Text>
        <FormattedMessage
          defaultMessage="Employee type"
          description="Employee type field"
        />
      </Text>

      <Spacer y={0.5} />

      <Radio.Group
        value={watch('type')}
        onChange={e => setValue('type', e as EmployeeType)}
        row
      >
        <Radio value={EmployeeType.Driver} size="sm">
          {intl.formatMessage({
            defaultMessage: 'Driver',
          })}
        </Radio>
        <Radio value={EmployeeType.Dispatcher} size="sm">
          {intl.formatMessage({
            defaultMessage: 'Dispatcher',
          })}
        </Radio>
        <Radio value={EmployeeType.Other} size="sm">
          {intl.formatMessage({
            defaultMessage: 'Other',
          })}
        </Radio>
      </Radio.Group>
    </>
  )
}

export default EmployeeTypeField
