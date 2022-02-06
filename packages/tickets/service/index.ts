import { http } from 'core/http'

import { CreateTicketRequest, Tickets } from '../models'

export const TicketsService = {
  save: async (ticket: CreateTicketRequest, transportSheetId: string) => {
    return await http.post(
      `/tickets/transport-sheets/${transportSheetId}/tickets`,
      ticket,
    )
  },
  fetchAllByTransportSheet: async (transportSheetId: string) => {
    return await http.get<Tickets>(
      `/tickets/transport-sheets/${transportSheetId}/tickets`,
    )
  },
  fetchAllByClient: async (clientId: string) => {
    return await http.get<Tickets>(`/tickets/by-client/${clientId}`)
  },
}
