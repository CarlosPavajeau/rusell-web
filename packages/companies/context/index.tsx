import { createContext, ReactNode, useState } from 'react'

import { Company } from '../models'

type CompanyContext = {
  company: Company | null
  setCompany: (company: Company | null) => void
}

// eslint-disable-next-line no-redeclare
const CompanyContext = createContext<CompanyContext>({
  company: null,
  setCompany: () => {},
})

export const CompanyProvider = ({ children }: { children: ReactNode }) => {
  const [company, setCompany] = useState<Company | null>(null)

  return (
    <CompanyContext.Provider value={{ company, setCompany }}>
      {children}
    </CompanyContext.Provider>
  )
}

export default CompanyContext
