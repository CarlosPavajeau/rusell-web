export type CreateVehicleRequest = {
  licensePlate: string
  internalNumber: string
  propertyCard: string
  type: string
  mark: string
  model: string
  modelNumber: string
  color: string
  chairs: number
  engineNumber: string
  chassisNumber: string
  ownerId: string
  driverId: string
}

export type CreateVehicleLegalInformationRequest = {
  type: string
  dueDate: Date
  renovationDate: Date
}

export type Vehicle = {
  licensePlate: string
  internalNumber: string
  propertyCard: string
  type: string
  mark: string
  model: string
  modelNumber: string
  color: string
  chairs: number
  engineNumber: string
  chassisNumber: string
  driverName: string
}

export type Vehicles = Vehicle[]
