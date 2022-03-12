import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { VehiclesService } from '@rusell/vehicles'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { licensePlate } = request.query
  const { body } = request

  await VehiclesService.saveLegalInformation(body, licensePlate as string)

  response.status(201).end()
}

export default withApiAuthRequired(withBearerToken(handler))
