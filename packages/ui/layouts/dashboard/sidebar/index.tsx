import { Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const DashboardSidebar: FC<Props> = ({ isOpen, onClose }) => {
  const { pathname } = useRouter()

  useEffect(() => {
    if (isOpen) {
      onClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <Text h1>Dashboard</Text>
    </>
  )
}

export default DashboardSidebar
