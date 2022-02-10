import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { AddressesService } from 'addresses/service'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query
  const address = await AddressesService.fetchById(id as string)
  response.status(200).json(address)
}

export default withApiAuthRequired(withBearerToken(handler))
