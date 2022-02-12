import { styled } from '@mui/material'
import { ReactNode, useState } from 'react'

import DashboardNavbar from './dashboard/navbar'
import DashboardSidebar from './dashboard/sidebar'

type Props = {
  children: ReactNode
}

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
})

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

const DashboardLayout = (props: Props) => {
  const { children } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <RootStyle>
      <DashboardNavbar />
      <DashboardSidebar
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <MainStyle>{children}</MainStyle>
    </RootStyle>
  )
}

export default DashboardLayout
