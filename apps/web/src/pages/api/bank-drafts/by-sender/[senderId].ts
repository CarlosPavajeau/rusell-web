import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { BankDraftsService } from '@rusell/bank-drafts'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { senderId } = request.query
  const bankDrafts = await BankDraftsService.fetchAllBySender(
    senderId as string,
  )

  response.status(200).json(bankDrafts)
}

export default withApiAuthRequired(withBearerToken(handler))
