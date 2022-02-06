import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CompaniesService } from 'companies'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { userId } = request.query
  const company = await CompaniesService.fetchByUser(userId as string)

  response.status(200).json(company)
}

export default withApiAuthRequired(withBearerToken(handler))
