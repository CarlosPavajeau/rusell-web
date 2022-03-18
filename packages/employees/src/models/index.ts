export enum EmployeeType {
  // eslint-disable-next-line no-unused-vars
  Driver,
  // eslint-disable-next-line no-unused-vars
  Dispatcher,
  // eslint-disable-next-line no-unused-vars
  Other,
}

export type CreateEmployeeRequest = {
  id: string
  firstName: string
  middleName: string
  firstSurname: string
  secondSurname: string
  email?: string
  phoneNumber: string
  type: EmployeeType
  userId?: string
}

export type Employee = {
  id: string
  fullName: string
  email?: string
  phoneNumber: string
  type: EmployeeType
  companyId: string
}

export type Employees = Employee[]
