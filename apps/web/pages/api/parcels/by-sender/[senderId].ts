import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { ParcelsService } from 'parcels/service'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { senderId } = request.query
  const parcels = await ParcelsService.fetchBySender(senderId as string)

  response.status(200).json(parcels)
}

export default withApiAuthRequired(withBearerToken(handler))
