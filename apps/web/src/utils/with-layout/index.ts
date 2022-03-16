import { ComponentType, PropsWithChildren } from 'react'
import withDefaults from 'utils/with-defaults'

type WithLayoutProps = {
  Layout: ComponentType<PropsWithChildren<{}>>
}

const withLayout = <P>(component: ComponentType<P>, layout: ComponentType) => {
  return withDefaults<P, WithLayoutProps>(component, {
    Layout: layout,
  })
}

export default withLayout
