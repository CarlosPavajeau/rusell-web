import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CompaniesService } from 'companies'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  await CompaniesService.save(request.body)

  response.status(200)
}

export default withApiAuthRequired(withBearerToken(handler))
