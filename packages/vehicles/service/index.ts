import { http } from 'core/http'

import {
  CreateVehicleLegalInformationRequest,
  CreateVehicleRequest,
  Vehicles,
} from '../models'

export const VehiclesService = {
  save: async (vehicle: CreateVehicleRequest, companyId: string) => {
    return await http.post(`/vehicles/companies/${companyId}/vehicles`, vehicle)
  },
  saveLegalInformation: async (
    legalInformation: CreateVehicleLegalInformationRequest,
    licencePlate: string,
  ) => {
    return await http.post(
      `/vehicles/${licencePlate}/legal-information`,
      legalInformation,
    )
  },
  fetchAllByCompany: async (companyId: string) => {
    return await http.get<Vehicles>(`/vehicles/companies/${companyId}/vehicles`)
  },
}
