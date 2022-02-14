import { Popover, PopoverProps } from '@mui/material'
import { ReactNode } from 'react'

interface Props extends PopoverProps {
  children: ReactNode
}

const MenuPopover = (props: Props) => {
  const { children, sx, ...other } = props
  return (
    <Popover
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: 'inherit',
          width: 200,
          ...sx,
        },
      }}
      {...other}
    >
      {children}
    </Popover>
  )
}

export default MenuPopover
