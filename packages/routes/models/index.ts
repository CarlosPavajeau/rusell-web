export type CreateRouteRequest = {
  from: string
  to: string
  cost: number
  isCustomerPickedUpAtHome: boolean
  isCustomerDroppedOffAtHome: boolean
}

export type Route = {
  from: string
  to: string
  cost: number
  isCustomerPickedUpAtHome: boolean
  isCustomerDroppedOffAtHome: boolean
}

export type Address = {
  country: string
  state: string
  city: string
}

export type Routes = Route[]
