import { fetcher } from '@rusell/core/http/fetcher'
import { useContext, useEffect } from 'react'
import useSWR from 'swr'

import CompanyContext from '../context'
import { Company } from '../models'

type LoadingCompany = boolean
type CompanyError = boolean

const useCompany = (): [Company | undefined, LoadingCompany, CompanyError] => {
  const { company, setCompany } = useContext(CompanyContext)

  const { data, isValidating, error } = useSWR<Company | undefined>(
    company ? `/api/companies/${company.id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    },
  )

  useEffect(() => {
    setCompany(data)
  }, [data, setCompany])

  return [company, isValidating, error]
}

export default useCompany
