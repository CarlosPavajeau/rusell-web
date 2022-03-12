export type CreateCompanyRequest = {
  name: string
  nit?: string
  info: string
}

export type Company = {
  id: string
  name: string
  nit?: string
  info: string
}
