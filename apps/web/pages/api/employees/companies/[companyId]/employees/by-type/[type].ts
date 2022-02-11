import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { EmployeeType } from 'employees/models'
import { EmployeeService } from 'employees/service'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { companyId, type } = request.query
  const employees = await EmployeeService.fetchAllByType(
    companyId as string,
    EmployeeType[type as string],
  )

  response.status(200).json(employees)
}

export default withApiAuthRequired(withBearerToken(handler))
