import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { BankDraftState } from 'bank-drafts/models'
import { BankDraftsService } from 'bank-drafts/service'
import { NextApiRequest, NextApiResponse } from 'next'
import withBearerToken from 'utils/auth0/withBearerToken'

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { receiverId, state } = request.query

  const bankDrafts = await BankDraftsService.fetchByReceiver(
    receiverId as string,
    state !== undefined ? BankDraftState[state as string] : undefined,
  )

  response.status(200).json(bankDrafts)
}

export default withApiAuthRequired(withBearerToken(handler))
