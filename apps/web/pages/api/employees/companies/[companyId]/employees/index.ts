import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { EmployeeService } from 'employees/service'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { companyId } = request.query

  if (request.method === 'POST') {
    const { body } = request
    await EmployeeService.save(body, companyId as string)

    response.status(200)
  }

  if (request.method === 'GET') {
    const employees = await EmployeeService.fetchAll(companyId as string)

    response.status(200).json(employees)
  }
}

export default withApiAuthRequired(withBearerToken(handler))
