import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CompaniesService } from 'companies'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const companies = async (
  request: NextApiRequest,
  response: NextApiResponse,
) => {
  const { nit } = request.query
  const companies = await CompaniesService.fetchByNit(nit as string)

  response.status(200).json(companies)
}

export default withApiAuthRequired(withBearerToken(companies))
