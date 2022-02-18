import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { RoutesService } from 'routes/service'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { companyId } = request.query

  if (request.method === 'POST') {
    const { body } = request
    await RoutesService.save(body, companyId as string)

    response.status(201).end()
  }

  if (request.method === 'GET') {
    const routes = await RoutesService.fetchAllByCompany(companyId as string)

    response.status(200).json(routes)
  }
}

export default withApiAuthRequired(withBearerToken(handler))
