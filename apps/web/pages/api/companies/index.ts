import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { http } from 'core/http'
import { CompaniesService } from 'companies'
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

  await CompaniesService.saveCompany(request.body)

  response.status(200)
}

export default withApiAuthRequired(companies)
