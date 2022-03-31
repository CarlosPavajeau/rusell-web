import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { getSidebarSettings } from '@rusell/shared/settings/get-sidebar-settings'
import { ManagementClient } from 'auth0'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const management = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'read:users read:roles',
  })

  const { user } = getSession(request, response)
  const { sub } = user

  const userRoles = await management.getUserRoles({
    id: sub,
  })

  const roles = userRoles.map(role => role.name)
  const settings = getSidebarSettings(roles)

  response.status(200).json(settings)
}

export default withApiAuthRequired(handler)
