import { http } from 'core/http'

import { Company, CreateCompanyRequest } from '../models'

export const CompaniesService = {
  saveCompany: async (company: CreateCompanyRequest) => {
    await http.post('/companies', company)
  },
  fetchCompany: async (id: string) => {
    const { data } = await http.get<Company>(`/companies/${id}`)
    return data
  },
  fetchCompanyByNit: async (nit: string) => {
    const { data } = await http.get<Company>(`/companies/by-nit/${nit}`)
    return data
  },
  fetchCompanyByUser: async (userId: string) => {
    const { data } = await http.get<Company>(`/companies/by-user/${userId}`)
    return data
  },
}
