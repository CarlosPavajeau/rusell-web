import { Input } from '@nextui-org/react'
import type { Address } from '@rusell/addresses'
import { AddressSelectModal } from '@rusell/addresses'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateRouteRequest } from '../../models'
import SearchAddressButton from './search-address.button'

const ToField = () => {
  const intl = useIntl()
  const {
    register,
    setValue,
    watch,
    formState: {
      errors: { to: toError },
    },
  } = useFormContext<CreateRouteRequest>()

  const [address, setAddress] = useState<Address | undefined>(undefined)
  const [openAddressModal, setOpenAddressModal] = useState(false)
  const handleSelectAddress = (address: Address) => {
    setValue('to', address.id)
    setAddress(address)
    setOpenAddressModal(false)
  }

  const handleCancelAddressModal = () => {
    setOpenAddressModal(false)
  }

  return (
    <>
      <Input
        readOnly
        label={intl.formatMessage({
          defaultMessage: 'To',
          description: 'To field',
        })}
        value={
          address ? `${address.country}, ${address.state}, ${address.city}` : ''
        }
        helperText={toError?.message}
        helperColor={'error'}
        status={toError ? 'error' : 'default'}
        width="100%"
        contentRightStyling={false}
        contentRight={
          <SearchAddressButton onClick={() => setOpenAddressModal(true)} />
        }
      />

      <Input
        hidden
        {...register('to', {
          required: {
            value: true,
            message: intl.formatMessage({
              defaultMessage: 'Please select an ending point',
              description: 'Error message for to field',
            }),
          },
        })}
      />

      <AddressSelectModal
        open={openAddressModal}
        selectedAddressId={watch('from')}
        onSelect={handleSelectAddress}
        onCancel={handleCancelAddressModal}
      />
    </>
  )
}

export default ToField
