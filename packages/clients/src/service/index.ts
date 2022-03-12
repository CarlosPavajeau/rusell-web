import { http } from '@rusell/core/http'

import { Client, CreateClientRequest } from '../models'

export const ClientsService = {
  save: async (client: CreateClientRequest) => {
    return await http.post('/clients', client)
  },
  fetchById: async (clientId: string) => {
    const { data } = await http.get<Client>(`/clients/${clientId}`)
    return data
  },
}
