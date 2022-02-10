import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { ClientsService } from 'clients/service'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { body } = request

  await ClientsService.save(body)

  response.status(200)
}

export default withApiAuthRequired(withBearerToken(handler))
