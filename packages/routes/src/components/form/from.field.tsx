import { Input } from '@nextui-org/react'
import type { Address } from '@rusell/addresses'
import { AddressSelectModal } from '@rusell/addresses'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { CreateRouteRequest } from '../../models'
import SearchAddressButton from './search-address.button'

const FromField = () => {
  const intl = useIntl()
  const {
    register,
    setValue,
    watch,
    formState: {
      errors: { from: fromError },
    },
  } = useFormContext<CreateRouteRequest>()

  const [address, setAddress] = useState<Address | undefined>(undefined)
  const [openAddressModal, setOpenAddressModal] = useState(false)
  const handleSelectAddress = (address: Address) => {
    setValue('from', address.id)
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
          defaultMessage: 'From',
          description: 'From field',
        })}
        value={
          address ? `${address.country}, ${address.state}, ${address.city}` : ''
        }
        helperText={fromError?.message}
        helperColor={'error'}
        status={fromError ? 'error' : 'default'}
        width="100%"
        contentRightStyling={false}
        contentRight={
          <SearchAddressButton onClick={() => setOpenAddressModal(true)} />
        }
      />

      <Input
        hidden
        {...register('from', {
          required: {
            value: true,
            message: intl.formatMessage({
              defaultMessage: 'Please select a starting point',
              description: 'Error message for from field',
            }),
          },
        })}
      />

      <AddressSelectModal
        open={openAddressModal}
        selectedAddressId={watch('to')}
        onSelect={handleSelectAddress}
        onCancel={handleCancelAddressModal}
      />
    </>
  )
}

export default FromField
