import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { EmployeeService, EmployeeType } from '@rusell/employees'
import { ManagementClient } from 'auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const DISPATCHER_ROLE = 'dispatcher'

const assignDispatcherEmployeeRole = async (
  request: NextApiRequest,
  response: NextApiResponse,
  userId: string,
) => {
  const management = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'read:users update:users read:roles',
  })

  const roles = await management.getRoles({
    name_filter: DISPATCHER_ROLE,
  })

  if (roles.length === 0) {
    response.status(500).json({
      message: 'No dispatcher role found',
    })
    return false
  }

  const dispatcherRoleId = roles.at(0)
  if (dispatcherRoleId === undefined || dispatcherRoleId.id === undefined) {
    response.status(500).json({
      message: 'No dispatcher role found',
    })
    return false
  }

  const roleId = dispatcherRoleId.id
  await management.assignRolestoUser({ id: userId }, { roles: [roleId] })
  return true
}

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { companyId } = request.query

  if (request.method === 'POST') {
    try {
      const { body } = request
      await EmployeeService.save(body, companyId as string)

      const management = new ManagementClient({
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        scope: 'create:users',
      })

      const user = await management.createUser({
        connection: 'Username-Password-Authentication',
        email: body.email,
        password: `${body.firstName.trim().toLowerCase()}${body.id}`,
        user_metadata: {
          companyId: companyId as string,
        },
      })

      if (user === undefined || user.user_id === undefined) {
        response.status(500).json({
          message: 'Failed to create user',
        })
        return
      }

      const { type } = body
      if (type === EmployeeType.Dispatcher) {
        const assignDispatcherRole = await assignDispatcherEmployeeRole(
          request,
          response,
          user.user_id,
        )
        if (assignDispatcherRole) {
          response.status(201).end()
          return
        }
      }

      response.status(201).end()
      return
    } catch (error: any) {
      if (error.response) {
        response.status(error.response.status).json(error.response.data)
      } else if (error.request) {
        response.status(500).json({ message: error.request })
      } else {
        response.status(500).json({ message: error.message })
      }

      return
    }
  }

  const employees = await EmployeeService.fetchAllByCompany(companyId as string)
  response.status(200).json(employees)
}

export default withApiAuthRequired(withBearerToken(handler))
