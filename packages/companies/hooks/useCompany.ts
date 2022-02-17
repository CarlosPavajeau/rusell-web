import axios from 'axios'
import { useContext, useEffect, useState } from 'react'

import CompanyContext from '../context'
import { Company } from '../models'

type LoadingCompany = boolean
type CompanyError = boolean

const useCompany = (): [Company | null, LoadingCompany, CompanyError] => {
  const { company, setCompany } = useContext(CompanyContext)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCompany = async () => {
      if (company === null) {
        setLoading(true)
        try {
          const { data } = await axios.get<Company>(`/api/companies`)
          setCompany(data)
        } catch (error) {
          setError(true)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchCompany()
  }, [company, setCompany])

  return [company, loading, error]
}

export default useCompany
