import { fetcher } from '@rusell/shared/http/fetcher'
import useSWR from 'swr'

import { Employee } from '../models'

const useCurrentEmployee = (): [
  Employee | undefined,
  boolean,
  Error | undefined,
] => {
  const { data, isValidating, error } = useSWR<Employee | undefined>(
    '/api/employees/current',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  return [data, isValidating, error]
}

export default useCurrentEmployee
