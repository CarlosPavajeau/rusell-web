import { http } from '@rusell/core/http'

import { CreateTransportSheetRequest, TransportSheets } from '../models'

export const TransportSheetsService = {
  save: async (
    transportSheet: CreateTransportSheetRequest,
    companyId: string,
  ) => {
    const { data } = await http.post<string>(
      `/transport-sheets/companies/${companyId}/transport-sheets`,
      transportSheet,
    )
    return data
  },
  fetchAllByCompany: async (companyId: string) => {
    const { data } = await http.get<TransportSheets>(
      `/transport-sheets/companies/${companyId}/transport-sheets`,
    )
    return data
  },
}
