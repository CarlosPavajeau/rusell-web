import { useUser } from '@auth0/nextjs-auth0'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Avatar } from '@nextui-org/react'
import { useRef, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import MenuPopover from '../../../menu/MenuPopover'

const AccountPopover = () => {
  const { user, isLoading } = useUser()

  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
        }}
        size="large"
      >
        <Avatar
          pointer
          alt={user?.name || 'User Avatar'}
          src={user?.picture || ''}
        />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button variant="contained" color="error" fullWidth>
            <Link
              href="/api/auth/logout"
              color="inherit"
              sx={{ textDecoration: 'none' }}
            >
              <FormattedMessage
                defaultMessage="Logout"
                description="Index: Logout"
              />
            </Link>
          </Button>
        </Box>
      </MenuPopover>
    </>
  )
}

export default AccountPopover
