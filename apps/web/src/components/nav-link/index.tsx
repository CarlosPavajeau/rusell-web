import { Link, styled } from '@nextui-org/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FC, HTMLAttributes } from 'react'

export interface Props {
  href: string
  pathname: string
  title: string
  selected: boolean
  color?: string
}

const defaultProps = {
  href: '',
  pathname: '',
  title: '',
  selected: false,
}

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>

export type NavLinkProps = Props & typeof defaultProps & NativeAttrs

const BaseLink = styled(Link, {
  d: 'flex',
  textDecoration: 'none',
  '@smMax': {
    pt: 0,
    pl: 0,
    pb: 0,
    d: 'flex',
    ai: 'center',
  },
  '&:active': {
    opacity: 0.7,
  },
  variants: {
    selected: {
      true: {
        boxSizing: 'border-box',
        fontWeight: '$semibold',
        '@smMax': {
          borderLeft: 'none',
          paddingLeft: 0,
        },
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        pe: 'none',
      },
    },
  },
})

const NavLink: FC<NavLinkProps> = ({
  href,
  pathname,
  title,
  color,
  selected,
}) => {
  const router = useRouter()
  const onlyHashChange = pathname === router.pathname

  if (onlyHashChange) {
    return (
      <BaseLink
        href={pathname}
        selected={selected}
        css={{
          color: color || 'inherit',
        }}
      >
        {title}
      </BaseLink>
    )
  }

  return (
    <NextLink href={pathname || href}>
      <BaseLink
        href={pathname}
        selected={selected}
        css={{
          color: color || 'inherit',
        }}
      >
        {title}
      </BaseLink>
    </NextLink>
  )
}

export default NavLink
