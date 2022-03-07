import { Button, Tooltip, useTheme } from '@nextui-org/react'
import { FC, MouseEventHandler } from 'react'
import { Search } from 'react-iconly'

type Props = {
  onClick: MouseEventHandler
}

const SearchAddressButton: FC<Props> = ({ onClick }) => {
  const theme = useTheme()
  return (
    <Tooltip content="Search an address">
      <Button
        auto
        type="button"
        css={{
          w: '24px',
          p: '0 14px',
          bgColor: 'transparent',
        }}
        icon={
          <Search primaryColor={theme.theme?.colors.text.value || 'white'} />
        }
        onClick={onClick}
      />
    </Tooltip>
  )
}

export default SearchAddressButton