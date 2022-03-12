import { fetcher } from '@rusell/core/http/fetcher'
import useSWR from 'swr'

import { Addresses } from '../models'

const useAddresses = (): [
  Addresses | undefined,
  boolean,
  Error | undefined,
] => {
  const { data, error, isValidating } = useSWR<Addresses>(
    '/api/addresses',
    fetcher,
  )

  return [data, isValidating, error]
}

export default useAddresses
