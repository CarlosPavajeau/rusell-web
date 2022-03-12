import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { ClientsService } from '@rusell/clients'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { clientId } = request.query

  const client = await ClientsService.fetchById(clientId as string)

  response.status(200).json(client)
}

export default withApiAuthRequired(withBearerToken(handler))
