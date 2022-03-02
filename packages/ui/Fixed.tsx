import { CSS, styled } from '@nextui-org/react'
import cn from 'classnames'
import { FC, memo, PropsWithChildren } from 'react'

import withDefaults from './utils/withDefaults'

export interface FixedProps {
  offset?: number
  shadow?: boolean
  className?: string
  css?: CSS
}

const defaultProps = {
  offset: 0,
  shadow: false,
  className: '',
}

const StyledFixed = styled('div', {
  background: 'transparent',
  position: 'fixed',
  zIndex: '$max',
  variants: {
    shadow: {
      true: {
        bs: '$sm',
      },
    },
  },
})

const Fixed: FC<PropsWithChildren<FixedProps>> = ({
  offset,
  children,
  shadow,
  className,
  css,
}) => {
  return (
    <StyledFixed
      css={{ ...(css as any), top: offset || 0 }}
      className={cn(className, { shadow })}
      shadow={shadow}
    >
      {children}
    </StyledFixed>
  )
}

const MemoFixed = memo(Fixed)

export default withDefaults(MemoFixed, defaultProps)
