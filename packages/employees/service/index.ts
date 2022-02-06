import { http } from 'core/http'

import { CreateEmployeeRequest, Employees, EmployeeType } from '../models'

export const EmployeeService = {
  save: async (employee: CreateEmployeeRequest, companyId: string) => {
    return await http.post(
      `/employees/companies/${companyId}/employees`,
      employee,
    )
  },
  fetchAll: async (companyId: string) => {
    return await http.get<Employees>(
      `/employees/companies/${companyId}/employees`,
    )
  },
  fetchAllByType: async (companyId: string, type: EmployeeType) => {
    return await http.get<Employees>(
      `/employees/companies/${companyId}/employees/by-type/${type}`,
    )
  },
}
