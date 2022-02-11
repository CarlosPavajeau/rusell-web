import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { Address } from 'routes/models'
import { RoutesService } from 'routes/service'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const from: Address = {
    country: request.query['from.country'] as string,
    state: request.query['from.state'] as string,
    city: request.query['from.city'] as string,
  }

  const to: Address = {
    country: request.query['to.country'] as string,
    state: request.query['to.state'] as string,
    city: request.query['to.city'] as string,
  }

  const routes = await RoutesService.fetchByFromTo(from, to)

  response.status(200).json(routes)
}

export default withApiAuthRequired(withBearerToken(handler))
