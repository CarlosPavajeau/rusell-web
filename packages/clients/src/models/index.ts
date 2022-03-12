export type CreateClientRequest = {
  id: string
  firstName: string
  middleName: string
  firstSurname: string
  secondSurname: string
  phoneNumber: string
}

export type Client = {
  id: string
  fullName: string
}

export type Clients = Client[]
