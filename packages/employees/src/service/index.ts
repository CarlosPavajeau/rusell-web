import { http } from '@rusell/shared/http'

import { CreateEmployeeRequest, Employees, EmployeeType } from '../models'

export const EmployeeService = {
  save: async (employee: CreateEmployeeRequest, companyId: string) => {
    return await http.post(
      `/employees/companies/${companyId}/employees`,
      employee,
    )
  },
  fetchAllByCompany: async (companyId: string) => {
    const { data } = await http.get<Employees>(
      `/employees/companies/${companyId}/employees`,
    )
    return data
  },
  fetchAllByCompanyAndType: async (companyId: string, type: EmployeeType) => {
    const { data } = await http.get<Employees>(
      `/employees/companies/${companyId}/employees/by-type/${type}`,
    )
    return data
  },
}
