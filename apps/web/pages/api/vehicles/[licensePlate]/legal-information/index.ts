import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'
import { VehiclesService } from 'vehicles/service'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { licensePlate } = request.query
  const { body } = request

  await VehiclesService.saveLegalInformation(body, licensePlate as string)

  response.status(200)
}

export default withApiAuthRequired(withBearerToken(handler))
