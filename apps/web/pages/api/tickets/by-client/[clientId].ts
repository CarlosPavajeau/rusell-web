import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { TicketsService } from '@rusell/tickets/service'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { clientId } = request.query

  const tickets = await TicketsService.fetchAllByClient(clientId as string)

  response.status(200).json(tickets)
}

export default withApiAuthRequired(withBearerToken(handler))
