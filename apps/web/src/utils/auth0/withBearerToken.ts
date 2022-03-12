import { getAccessToken } from '@auth0/nextjs-auth0'
import { http } from '@rusell/shared/http'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const withBearerToken =
  (handler: NextApiHandler) =>
  async (request: NextApiRequest, response: NextApiResponse) => {
    const { accessToken } = await getAccessToken(request, response)

    http.interceptors.request.use(req => {
      req.headers.authorization = `Bearer ${accessToken}`
      return req
    })

    return handler(request, response)
  }

export default withBearerToken
