import InputSearchButton from '@rusell/ui/input-search.button'
import { FC, MouseEventHandler } from 'react'

type Props = {
  onClick: MouseEventHandler
}

const SearchAddressButton: FC<Props> = ({ onClick }) => {
  return (
    <InputSearchButton onClick={onClick} tooltipContent="Search an address" />
  )
}

export default SearchAddressButton
