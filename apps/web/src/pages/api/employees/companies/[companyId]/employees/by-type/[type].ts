import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { EmployeeService, EmployeeType } from '@rusell/employees'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { companyId, type } = request.query
  const employees = await EmployeeService.fetchAllByCompanyAndType(
    companyId as string,
    EmployeeType[type as string],
  )

  response.status(200).json(employees)
}

export default withApiAuthRequired(withBearerToken(handler))
