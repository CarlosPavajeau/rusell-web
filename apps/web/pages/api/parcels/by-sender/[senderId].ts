import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { ParcelsService } from '@rusell/parcels/service'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { senderId } = request.query
  const parcels = await ParcelsService.fetchAllBySender(senderId as string)

  response.status(200).json(parcels)
}

export default withApiAuthRequired(withBearerToken(handler))
