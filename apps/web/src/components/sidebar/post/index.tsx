import NavLink, { NavLinkProps } from '@components/nav-link'
import { useTheme } from '@nextui-org/react'
import cn from 'classnames'
import {
  FC,
  HTMLAttributes,
  memo,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import withDefaults from 'utils/with-defaults'

type Props = {
  level: number
  route: NavLinkProps
  isMobile: boolean
}

const defaultProps = {
  level: 1,
  isMobile: false,
}

type NativeAttrs = Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

export type PostProps = Props & typeof defaultProps & NativeAttrs

const Post: FC<PropsWithChildren<PostProps>> = ({
  isMobile,
  route,
  level = 1,
}) => {
  const selectedRef = useRef<HTMLDivElement>(null)
  const ref = route.selected ? selectedRef : null
  const { theme, isDark } = useTheme()

  useEffect(() => {
    if (ref && ref.current && !isMobile) {
      const content = document.querySelector(
        '.sidebar-content',
      ) as HTMLDivElement
      // 32 is the top and bottom margin for `.link`
      const height = ref.current.offsetTop - 32

      if (content) {
        content.scrollTop = height - content.offsetHeight / 2
      }
    }
  }, [ref, isMobile])

  const linkColor = useMemo(() => {
    if (route.selected) return
    return theme?.colors?.accents6?.value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark, route.selected])

  return (
    <div ref={ref} className={cn('link', `level-${level}`)}>
      <NavLink {...route} color={linkColor} />
      <style jsx>{`
        .link {
          margin: 18px 0;
          display: flex;
          align-items: center;
          min-height: 24px;
        }

        .link.disabled {
          cursor: not-allowed;
        }

        .link::before {
          content: '';
          flex-basis: 4px;
          flex-shrink: 0;
          display: block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${route.selected
            ? theme?.colors?.accents6?.value
            : theme?.colors?.accents4?.value};
          margin-right: 16px;
        }

        .link:first-child {
          margin-top: 0;
        }

        .link:last-child {
          margin-bottom: 0;
        }

        @media screen and (max-width: 950px) {
          .link {
            margin: 24px 0;
          }
        }
      `}</style>
    </div>
  )
}

const MemoizedPost = memo(Post)

export default withDefaults(MemoizedPost, defaultProps)
