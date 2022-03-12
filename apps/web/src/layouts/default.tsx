import { FC, PropsWithChildren } from 'react'

const DefaultLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <>{children}</>
}

export default DefaultLayout
