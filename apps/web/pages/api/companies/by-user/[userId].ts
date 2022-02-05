import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { CompaniesService } from 'companies'
import { http } from 'core/http'
import { NextApiRequest, NextApiResponse } from 'next'

const companies = async (
  request: NextApiRequest,
  response: NextApiResponse,
) => {
  const { accessToken } = await getAccessToken(request, response)

  http.interceptors.request.use(req => {
    req.headers.authorization = `Bearer ${accessToken}`
    return req
  })

  const { userId } = request.query
  const company = await CompaniesService.fetchByUser(userId as string)

  response.status(200).json(company)
}

export default withApiAuthRequired(companies)
