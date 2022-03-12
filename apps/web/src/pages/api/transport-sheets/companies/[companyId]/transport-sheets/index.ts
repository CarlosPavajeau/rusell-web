import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { TransportSheetsService } from '@rusell/transport-sheets'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { companyId } = request.query

  if (request.method === 'POST') {
    const { body } = request
    const id = await TransportSheetsService.save(body, companyId as string)

    response.status(201).json(id)
  }

  if (request.method === 'GET') {
    const transportSheets = await TransportSheetsService.fetchAllByCompany(
      companyId as string,
    )

    response.status(200).json(transportSheets)
  }
}

export default withApiAuthRequired(withBearerToken(handler))
