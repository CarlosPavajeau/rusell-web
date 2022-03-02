import MenuIcon from '@mui/icons-material/Menu'
import { alpha, styled } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'

import Hidden from '../../../Hidden'
import ThemeToggle from '../../../theme/theme-toggle'
import AccountPopover from './AccountPopover'

const DRAWER_WIDTH = 280
const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  webkitBackdropFilter: 'blur(6px)',
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}))

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}))

type Props = {
  onOpenSidebar: () => void
}

const DashboardNavbar = (props: Props) => {
  const { onOpenSidebar } = props

  return (
    <RootStyle>
      <ToolbarStyle>
        <Hidden width="lgUp">
          <IconButton
            onClick={onOpenSidebar}
            sx={{ mr: 1, color: 'text.primary' }}
            size="large"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <ThemeToggle />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  )
}

export default DashboardNavbar
