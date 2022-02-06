export type CreateTransportSheetRequest = {
  quota: number
  vehicleLicensePlate: string
  dispatcherId: string
}

export type TransportSheet = {
  date: Date
  departureTime?: Date
  quota: number
  vehicleLicensePlate: string
  dispatcherName: string
}

export type TransportSheets = TransportSheet[]
