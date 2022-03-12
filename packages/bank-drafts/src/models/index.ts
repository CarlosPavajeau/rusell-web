export type CreateBankDraftRequest = {
  amount: number
  cost: number
  dispatcherId: string
  senderId: string
  receiverId: string
}

export enum BankDraftState {
  // eslint-disable-next-line no-unused-vars
  Created = 'Created',
  // eslint-disable-next-line no-unused-vars
  Delivered = 'Delivered',
  // eslint-disable-next-line no-unused-vars
  Canceled = 'Canceled',
}

export type BankDraft = {
  date: Date
  amount: number
  cost: number
  total: number
  state: BankDraftState
  dispatcherName: string
  senderName: string
  receiverName: string
  companyName: string
}

export type BankDrafts = BankDraft[]
