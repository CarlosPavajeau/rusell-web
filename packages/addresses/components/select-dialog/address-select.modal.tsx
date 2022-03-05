import { Modal, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'

import useAddresses from '../../hooks/use-addresses'
import { Address } from '../../models'
import AddressItemModal from './address-item.modal'

type Props = {
  open: boolean
  selectedAddressId?: string

  onSelect: (address: Address) => void
  onCancel: () => void
}

const AddressSelectModal: FC<Props> = ({
  open,
  selectedAddressId,
  onSelect,
  onCancel,
}) => {
  const [addresses, isLoading, error] = useAddresses()

  return (
    <Modal closeButton blur open={open} onClose={onCancel}>
      <Modal.Header>
        <Text h3>
          <FormattedMessage defaultMessage="Select address" />
        </Text>
      </Modal.Header>

      <Modal.Body>
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {!isLoading && !error && (
          <ul>
            {addresses?.map(address => {
              if (
                selectedAddressId !== undefined &&
                address.id === selectedAddressId
              ) {
                return null
              }

              return (
                <li key={address.id} onClick={() => onSelect(address)}>
                  <AddressItemModal address={address} />
                </li>
              )
            })}
          </ul>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default AddressSelectModal
