import { http } from 'core/http'

import { BankDrafts, BankDraftState, CreateBankDraftRequest } from '../models'

export const BankDraftsService = {
  save: async (bankDraft: CreateBankDraftRequest, companyId: string) => {
    return await http.post(
      `/bank-drafts/companies/${companyId}/bank-drafts`,
      bankDraft,
    )
  },
  fetchBySender: async (senderId: string) => {
    const { data } = await http.get<BankDrafts>(
      `/bank-drafts/by-sender/${senderId}`,
    )
    return data
  },
  fetchByReceiver: async (receiverId: string, state?: BankDraftState) => {
    const { data } = await http.get<BankDrafts>(
      `/bank-drafts/by-receiver/${receiverId}${state ? `?state=${state}` : ''}`,
    )
    return data
  },
}
