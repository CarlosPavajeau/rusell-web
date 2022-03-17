import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { EmployeeService } from '@rusell/employees'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const currentEmployee = await EmployeeService.fetchCurrent()
  response.status(200).json(currentEmployee)
}

export default withApiAuthRequired(withBearerToken(handler))
