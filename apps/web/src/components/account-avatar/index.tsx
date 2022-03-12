import { useUser } from '@auth0/nextjs-auth0'
import { Avatar } from '@nextui-org/react'

const AccountAvatar = () => {
  const { user, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>

  return (
    <Avatar
      size="lg"
      alt={user?.name || 'User Avatar'}
      src={user?.picture || ''}
      pointer
    />
  )
}

export default AccountAvatar
