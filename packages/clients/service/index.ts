import { http } from 'core/http'

import { Client, CreateClientRequest } from '../models'

export const ClientsService = {
  save: async (client: CreateClientRequest) => {
    return await http.post('/clients', client)
  },
  fetch: async (clientId: string) => {
    const { data } = await http.get<Client>(`/clients/${clientId}`)
    return data
  },
}
