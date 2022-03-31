import useSWR from 'swr'

import { fetcher } from '../http/fetcher'
import { Route } from './types'

const useSidebarSettings = (): [Route[] | undefined, boolean, Error] => {
  const { data, error, isValidating } = useSWR<Route[]>(
    '/api/settings/sidebar',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  return [data, isValidating, error]
}

export default useSidebarSettings
