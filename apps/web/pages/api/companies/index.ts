import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CompaniesService } from 'companies'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    await CompaniesService.save(request.body)
    response.status(201).end()
  }

  const company = await CompaniesService.fetch()
  response.status(200).json(company)
}

export default withApiAuthRequired(withBearerToken(handler))
