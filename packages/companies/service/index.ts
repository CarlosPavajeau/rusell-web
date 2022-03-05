import { http } from '@rusell/core/http'

import { Company, CreateCompanyRequest } from '../models'

export const CompaniesService = {
  save: async (company: CreateCompanyRequest) => {
    await http.post('/companies', company)
  },
  fetch: async () => {
    const { data } = await http.get<Company>(`/companies`)
    return data
  },
  fetchByNit: async (nit: string) => {
    const { data } = await http.get<Company>(`/companies/by-nit/${nit}`)
    return data
  },
}
