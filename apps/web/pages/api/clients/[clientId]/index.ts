import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { ClientsService } from 'clients/service'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { clientId } = request.query

  const client = await ClientsService.fetch(clientId as string)

  response.status(200).json(client)
}

export default withApiAuthRequired(withBearerToken(handler))
