import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { ParcelState } from 'parcels/models'
import { ParcelsService } from 'parcels/service'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { receiverId, state } = request.query

  const parcels = await ParcelsService.fetchByReceiver(
    receiverId as string,
    state !== undefined ? ParcelState[state as string] : undefined,
  )

  response.status(200).json(parcels)
}

export default withApiAuthRequired(withBearerToken(handler))
