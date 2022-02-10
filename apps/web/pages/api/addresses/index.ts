import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { AddressesService } from 'addresses/service'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    const addresses = await AddressesService.fetchAll()
    response.status(200).json(addresses)
    return
  }

  if (request.method === 'POST') {
    const { body } = request
    await AddressesService.save(body)
    response.status(201).end()
  }
}

export default withApiAuthRequired(withBearerToken(handler))
