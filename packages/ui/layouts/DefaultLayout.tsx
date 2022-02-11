import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const DefaultLayout = (props: Props) => {
  const { children } = props
  return <>{children}</>
}

export default DefaultLayout
