import { fetcher } from '@rusell/core/http/fetcher'
import useSWR from 'swr'

import { Routes } from '../models'

const useRoutes = (
  companyId?: string,
): [Routes | undefined, boolean, Error | undefined] => {
  const { data, isValidating, error } = useSWR<
    Routes | undefined,
    Error | undefined
  >(companyId ? `/api/routes/companies/${companyId}/routes` : null, fetcher)

  return [data, isValidating, error]
}

export default useRoutes
