import { fetcher } from '@rusell/shared/http/fetcher'
import useSWR from 'swr'

import { Vehicles } from '../models'

const useVehicles = (
  companyId?: string,
): [Vehicles | undefined, boolean, Error | undefined] => {
  const { data, isValidating, error } = useSWR<
    Vehicles | undefined,
    Error | undefined
  >(companyId ? `/api/vehicles/companies/${companyId}/vehicles` : null, fetcher)

  return [data, isValidating, error]
}

export default useVehicles
