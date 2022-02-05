import { http } from 'core/http'

import { Address, Addresses, CreateAddressRequest } from '../models'

export const AddressesService = {
  save: async (address: CreateAddressRequest) => {
    return await http.post('/addresses', address)
  },
  fetch: async () => {
    const { data } = await http.get<Addresses>('/addresses')
    return data
  },
  fetchAll: async (id: string) => {
    const { data } = await http.get<Address>(`/addresses/${id}`)
    return data
  },
}
