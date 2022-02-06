export type CreateTicketRequest = {
  seatPrice: number
  seats: number
  clientId: string
}

export enum TicketState {
  // eslint-disable-next-line no-unused-vars
  Pending = 'Pending',
  // eslint-disable-next-line no-unused-vars
  Paid = 'Paid',
}

export type Ticket = {
  id: string
  date: Date
  state: TicketState
  seatPrice: number
  seats: number
  total: number
  clientName: string
}

export type Tickets = Ticket[]
