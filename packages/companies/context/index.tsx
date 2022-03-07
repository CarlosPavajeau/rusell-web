import { createContext, ReactNode, useState } from 'react'

import { Company } from '../models'

type CompanyContext = {
  company?: Company | undefined
  setCompany: (company: Company | undefined) => void
}

// eslint-disable-next-line no-redeclare
const CompanyContext = createContext<CompanyContext>({
  company: undefined,
  setCompany: () => {},
})

export const CompanyProvider = ({ children }: { children: ReactNode }) => {
  const [company, setCompany] = useState<Company | undefined>(undefined)

  return (
    <CompanyContext.Provider value={{ company, setCompany }}>
      {children}
    </CompanyContext.Provider>
  )
}

export default CompanyContext
