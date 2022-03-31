export type Route = {
  title: string
  subtitle?: string
  open?: boolean
  path?: string
  routes?: Route[]
}

export type SidebarSettings = {
  roles: string[]
  routes: Route[]
}
