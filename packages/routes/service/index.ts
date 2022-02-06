import { http } from 'core/http'

import { Address, CreateRouteRequest, Routes } from '../models'

export const RoutesService = {
  save: async (route: CreateRouteRequest, companyId: string) => {
    return await http.post(`/routes/companies/${companyId}/routes`, route)
  },
  fetchByCompany: async (companyId: string) => {
    return await http.get<Routes>(`/routes/companies/${companyId}/routes`)
  },
  fetchByFromTo: async (from: Address, to: Address) => {
    return await http.get<Routes>(
      `/routes?from.country=${from.country}&from.state=${from.state}&from.city=${from.city}&to.country=${to.country}&to.state=${to.state}&to.city=${to.city}`,
    )
  },
}
