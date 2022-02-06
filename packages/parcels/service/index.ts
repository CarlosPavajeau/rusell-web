import { http } from 'core/http'

import { CreateParcelRequest, Parcels, ParcelState } from '../models'

export const ParcelsService = {
  save: async (parcel: CreateParcelRequest, companyId: string) => {
    return await http.post(`/parcels/companies/${companyId}/parcels`, parcel)
  },
  fetchBySender: async (senderId: string) => {
    const { data } = await http.get<Parcels>(`/parcels/by-sender/${senderId}`)
    return data
  },
  fetchByReceiver: async (receiverId: string, state?: ParcelState) => {
    const { data } = await http.get<Parcels>(
      `/parcels/by-receiver/${receiverId}${state ? `?state=${state}` : ''}`,
    )
    return data
  },
}
