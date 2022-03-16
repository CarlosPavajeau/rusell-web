import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CompaniesService } from '@rusell/companies'
import { ManagementClient } from 'auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const COMPANY_ROLE = 'company'

const assignCompanyRole = async (
  request: NextApiRequest,
  response: NextApiResponse,
) => {
  const management = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'read:users update:users read:roles',
  })

  const { user } = getSession(request, response)
  const { sub } = user

  if (sub === undefined) {
    response.status(500).json({ message: 'User not found' })
    return false
  }

  const roles = await management.getRoles({
    name_filter: COMPANY_ROLE,
  })

  if (roles.length === 0) {
    response.status(500).json({
      message: 'No company role found',
    })
    return false
  }

  const companyRole = roles.at(0)
  if (companyRole === undefined || companyRole.id === undefined) {
    response.status(500).json({
      message: 'No company role found',
    })
    return false
  }

  const roleId = companyRole.id
  await management.assignRolestoUser({ id: sub }, { roles: [roleId] })
  return true
}

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    try {
      await CompaniesService.save(request.body)

      const assignedRole = await assignCompanyRole(request, response)
      if (assignedRole) {
        response.status(201).end()
        return
      }
    } catch (error: any) {
      if (error.response) {
        response.status(error.response.status).json(error.response.data)
      } else if (error.request) {
        response.status(500).json({ message: error.request })
      } else {
        response.status(500).json({ message: error.message })
      }
    }

    return
  }

  const company = await CompaniesService.fetch()
  response.status(200).json(company)
}

export default withApiAuthRequired(withBearerToken(handler))
