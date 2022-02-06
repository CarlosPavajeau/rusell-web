export type CreateParcelRequest = {
  description: string
  cost: number
  vehicleLicensePlate: string
  dispatcherId: string
  senderId: string
  receiverId: string
}

export enum ParcelState {
  // eslint-disable-next-line no-unused-vars
  Created = 'Created',
  // eslint-disable-next-line no-unused-vars
  Delivered = 'Delivered',
  // eslint-disable-next-line no-unused-vars
  Canceled = 'Canceled',
}

export type Parcel = {
  date: Date
  description: string
  cost: number
  state: ParcelState
  vehicleLicensePlate: string
  dispatcherName: string
  senderName: string
  receiverName: string
  companyName: string
}

export type Parcels = Parcel[]
