import { CSS } from '@nextui-org/react'
import { styled } from '@stitches/react'

export type IconProps = {
  fill?: string
  filled?: boolean
  size?: string | number
  height?: string | number
  width?: string | number
  label?: string
  onClick?: () => void
  className?: string
  css?: CSS
}

export const Icon = styled('svg', {})

export { default as Moon } from './moon'
export { default as Sun } from './sun'
