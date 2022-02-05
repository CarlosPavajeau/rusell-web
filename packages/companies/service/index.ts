import { http } from 'core/http'

import { Company, CreateCompanyRequest } from '../models'

export const CompaniesService = {
  save: async (company: CreateCompanyRequest) => {
    await http.post('/companies', company)
  },
  fetch: async (id: string) => {
    const { data } = await http.get<Company>(`/companies/${id}`)
    return data
  },
  fetchByNit: async (nit: string) => {
    const { data } = await http.get<Company>(`/companies/by-nit/${nit}`)
    return data
  },
  fetchByUser: async (userId: string) => {
    const { data } = await http.get<Company>(`/companies/by-user/${userId}`)
    return data
  },
}
