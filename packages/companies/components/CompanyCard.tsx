import type { Company } from '../models'

type Props = {
  company: Company
}

export const CompanyCard = (props: Props) => {
  const { company } = props
  return (
    <>
      <h1>Id: {company.id}</h1>
      <h2>Name: {company.name}</h2>
      <p>Info: {company.info}</p>
      <small>Nit: {company.nit}</small>
    </>
  )
}
