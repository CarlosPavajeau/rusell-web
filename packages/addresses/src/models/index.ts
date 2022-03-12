export type CreateAddressRequest = {
  country: string
  state: string
  city: string
  neighborhood: string
  streetName: string
  intersection: string
  streetNumber: string
  comments: string
}

export type Address = CreateAddressRequest & { id: string }

export type Addresses = Address[]
