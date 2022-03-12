import InputSearchButton from '@rusell/ui/input-search.button'
import { FC, MouseEventHandler } from 'react'

type Props = {
  onClick: MouseEventHandler
}

const SearchRouteButton: FC<Props> = ({ onClick }) => {
  return <InputSearchButton onClick={onClick} tooltipContent="Search a route" />
}

export default SearchRouteButton
