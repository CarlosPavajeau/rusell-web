import { Route, SidebarSettings } from './types'

export const SETTINGS: SidebarSettings[] = [
  {
    roles: ['company'],
    routes: [
      {
        title: 'Addresses',
        routes: [
          {
            title: 'Addresses',
            path: '/addresses',
          },
          {
            title: 'Register address',
            path: '/addresses/register',
          },
        ],
      },
      {
        title: 'Employees',
        routes: [
          {
            title: 'Employees',
            path: '/employees',
          },
          {
            title: 'Register employee',
            path: '/employees/register',
          },
        ],
      },
      {
        title: 'Routes',
        routes: [
          {
            title: 'Routes',
            path: '/routes',
          },
          {
            title: 'Register route',
            path: '/routes/register',
          },
        ],
      },
      {
        title: 'Vehicles',
        routes: [
          {
            title: 'Vehicles',
            path: '/vehicles',
          },
          {
            title: 'Register vehicle',
            path: '/vehicles/register',
          },
        ],
      },
    ],
  },
  {
    roles: ['dispatcher'],
    routes: [
      {
        title: 'Bank drafts',
        routes: [
          {
            title: 'Bank drafts',
            path: '/bank-drafts',
          },
          {
            title: 'Register bank draft',
            path: '/bank-drafts/register',
          },
        ],
      },
      {
        title: 'Parcels',
        routes: [
          {
            title: 'Parcels',
            path: '/parcels',
          },
          {
            title: 'Register parcel',
            path: '/parcels/register',
          },
        ],
      },
      {
        title: 'Transport sheets',
        routes: [
          {
            title: 'Transport sheets',
            path: '/transport-sheets',
          },
          {
            title: 'Register transport sheet',
            path: '/transport-sheets/register',
          },
          {
            title: 'Current transport sheet',
            path: '/transport-sheets/current',
          },
        ],
      },
    ],
  },
]

/***
 * Get all routes for the sidebar based on the user's role
 * @param roles
 */
export const getSidebarSettings = (roles: string[]): Route[] | undefined => {
  return SETTINGS.filter(setting =>
    setting.roles.some(role => roles.includes(role)),
  )
    .map(setting => setting.routes)
    .flat(1)
    .sort((a, b) => a.title.localeCompare(b.title))
}
