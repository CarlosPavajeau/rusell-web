import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { TicketsService } from 'tickets/service'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { transportSheetId } = request.query

  if (request.method === 'POST') {
    const { body } = request
    await TicketsService.save(body, transportSheetId as string)

    response.status(200)
  }

  if (request.method === 'GET') {
    const tickets = await TicketsService.fetchAllByTransportSheet(
      transportSheetId as string,
    )

    response.status(200).json(tickets)
  }
}

export default withApiAuthRequired(withBearerToken(handler))
