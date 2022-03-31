import { NavLinkProps } from '@components/nav-link'
import Category from '@components/sidebar/category'
import Post from '@components/sidebar/post'
import { Route } from '@rusell/shared/settings'
import { FC, HTMLAttributes } from 'react'

type Props = {
  routes?: Route[]
  level?: number
}

const defaultProps: Props = {
  level: 1,
}

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>

export type SidebarProps = Props & typeof defaultProps & NativeAttrs

const Sidebar: FC<SidebarProps> = ({ routes, level }) => {
  return (
    <>
      {routes?.map(({ path, title, routes }) => {
        if (routes) {
          return (
            <Category key={path} title={title} routes={routes}>
              <Sidebar key={path} routes={routes} level={level + 1} />
            </Category>
          )
        }

        const route = {
          href: path,
          title: title,
          pathname: path,
        } as NavLinkProps
        return <Post key={title} route={route} />
      })}
    </>
  )
}

export default Sidebar
