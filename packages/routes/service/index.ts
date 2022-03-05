import { http } from '@rusell/core/http'

import { Address, CreateRouteRequest, Routes } from '../models'

export const RoutesService = {
  save: async (route: CreateRouteRequest, companyId: string) => {
    return await http.post(`/routes/companies/${companyId}/routes`, route)
  },
  fetchAllByCompany: async (companyId: string) => {
    const { data } = await http.get<Routes>(
      `/routes/companies/${companyId}/routes`,
    )
    return data
  },
  fetchAllByFromTo: async (from: Address, to: Address) => {
    const { data } = await http.get<Routes>(
      `/routes?from.country=${from.country}&from.state=${from.state}&from.city=${from.city}&to.country=${to.country}&to.state=${to.state}&to.city=${to.city}`,
    )
    return data
  },
}
