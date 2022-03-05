import { http } from '@rusell/core/http'

import { CreateTicketRequest, Tickets } from '../models'

export const TicketsService = {
  save: async (ticket: CreateTicketRequest, transportSheetId: string) => {
    return await http.post(
      `/tickets/transport-sheets/${transportSheetId}/tickets`,
      ticket,
    )
  },
  fetchAllByTransportSheet: async (transportSheetId: string) => {
    const { data } = await http.get<Tickets>(
      `/tickets/transport-sheets/${transportSheetId}/tickets`,
    )
    return data
  },
  fetchAllByClient: async (clientId: string) => {
    const { data } = await http.get<Tickets>(`/tickets/by-client/${clientId}`)
    return data
  },
}
