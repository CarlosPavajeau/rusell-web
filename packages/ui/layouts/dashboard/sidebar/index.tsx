import { Drawer, styled } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Hidden from '../../../Hidden'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const DRAWER_WIDTH = 280

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
}))

const DashboardSidebar = (props: Props) => {
  const { isOpen, onClose } = props
  const { pathname } = useRouter()

  useEffect(() => {
    if (isOpen) {
      onClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const renderContent = () => {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }

  return (
    <RootStyle>
      <Hidden width="lgUp">
        <Drawer
          open={isOpen}
          onClose={onClose}
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
            },
          }}
        >
          {renderContent()}
        </Drawer>
      </Hidden>

      <Hidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
            },
          }}
        >
          {renderContent()}
        </Drawer>
      </Hidden>
    </RootStyle>
  )
}

export default DashboardSidebar
