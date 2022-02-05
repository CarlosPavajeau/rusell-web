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

  const { nit } = request.query
  const companies = await CompaniesService.fetchCompanyByNit(nit as string)

  response.status(200).json(companies)
}

export default withApiAuthRequired(companies)
