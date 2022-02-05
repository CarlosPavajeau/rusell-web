import { http } from 'core/http'

import { Address, Addresses, CreateAddressRequest } from '../models'

export const AddressesService = {
  saveAddress: async (address: CreateAddressRequest) => {
    return await http.post('/addresses', address)
  },
  fetchAddresses: async () => {
    const { data } = await http.get<Addresses>('/addresses')
    return data
  },
  fetchAddress: async (id: string) => {
    const { data } = await http.get<Address>(`/addresses/${id}`)
    return data
  },
}
