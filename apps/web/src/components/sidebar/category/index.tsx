import { useTheme } from '@nextui-org/react'
import { Route } from '@rusell/shared/settings'
import cn from 'classnames'
import { FC, memo, PropsWithChildren, useMemo, useRef, useState } from 'react'
import { ChevronRight } from 'react-iconly'
import withDefaults from 'utils/with-defaults'

type Props = {
  level: number
  title: string
  routes: Route[]
}

const defaultProps = {
  level: 1,
}

const Category: FC<PropsWithChildren<Props>> = ({
  level,
  title,
  routes,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [toggle, setToggle] = useState<boolean>(false)

  const toggleCategory = () => {
    setToggle(!toggle)
  }

  const levelClass = `level-${level}`
  const margin = 18

  const postsHeight = useMemo(
    () => routes.length * 26 + margin * (routes.length - 1),
    [routes],
  )

  return (
    <div ref={ref} className={cn('category', levelClass, { open: toggle })}>
      <div className="label-container" onClick={toggleCategory}>
        <span className="label noselect">{title}</span>
        <ChevronRight size="small" />
      </div>
      <div className="posts">{children}</div>
      <style jsx>{`
        .category {
          margin: ${margin}px 0;
          cursor: pointer;
        }

        .category:last-child {
          margin-bottom: 0;
        }

        :global(.category-image) {
          opacity: 0;
          animation: appear 200ms 100ms ease forwards;
        }

        .label-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .label {
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 400;
          margin-left: 10px;
          cursor: pointer;
          color: ${theme?.colors?.accents7?.value};
          transition: all 200ms ease 0ms;
        }

        .label-container :global(svg) {
          margin-top: 1px;
          margin-left: 14px;
          transition: transform 0.15s ease;
        }

        .selected .label {
          font-weight: 600;
          color: ${theme?.colors?.accents8?.value};
        }

        .open .label {
          color: ${theme?.colors?.accents8?.value};
        }

        .open .label-container :global(svg) {
          margin-right: 1px;
          margin-left: 13px;
          transform: rotate(90deg);
        }

        .level-2 .label-container {
          text-transform: none;
          letter-spacing: 0;
        }

        .label:hover {
          opacity: 0.8;
        }

        .separated {
          margin-bottom: 32px;
        }

        .posts {
          margin-top: ${margin}px;
          height: 0;
          overflow: hidden;
          padding-left: 19px;
          margin-left: 3px;
          transition: height 200ms ease;
        }

        .open .posts {
          height: ${postsHeight}px;
        }

        @keyframes appear {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media screen and (max-width: ${theme?.breakpoints?.md}) {
          .category {
            margin: 24px 0;
          }
        }
      `}</style>
    </div>
  )
}

const MemoizedCategory = memo(Category)

export default withDefaults(MemoizedCategory, defaultProps)
