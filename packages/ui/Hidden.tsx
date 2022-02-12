import { Breakpoint, Theme, useMediaQuery } from '@mui/material'
import { ReactElement } from 'react'

interface MHiddenProps {
  children: ReactElement
  width:
    | 'xsDown'
    | 'smDown'
    | 'mdDown'
    | 'lgDown'
    | 'xlDown'
    | 'xsUp'
    | 'smUp'
    | 'mdUp'
    | 'lgUp'
    | 'xlUp'
}

const Hidden = (props: MHiddenProps): ReactElement | null => {
  const { children, width } = props
  const breakpoint = width.substring(0, 2) as Breakpoint

  const hiddenUp = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up(breakpoint),
  )
  const hiddenDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(breakpoint),
  )

  if (width.includes('Down')) {
    return hiddenDown ? null : children
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children
  }

  return null
}

export default Hidden
