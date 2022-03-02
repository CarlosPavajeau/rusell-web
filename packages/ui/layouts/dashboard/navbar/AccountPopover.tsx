import { useUser } from '@auth0/nextjs-auth0'
import { Avatar, Link, Spacer, Text, Tooltip } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'

const AccountPopover = () => {
  const { user, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>

  return (
    <Tooltip
      trigger="click"
      content={
        <>
          <Spacer y={0.5} />
          <Text h4>{user?.name}</Text>
          <Text h6>{user?.email}</Text>
          <Spacer y={1} />
          <Link color="error" href="/api/auth/logout" block>
            <FormattedMessage
              defaultMessage="Logout"
              description="Index: Logout"
            />
          </Link>
          <Spacer y={0.5} />
        </>
      }
      placement="bottom"
    >
      <Avatar
        size="lg"
        alt={user?.name || 'User Avatar'}
        src={user?.picture || ''}
        pointer
      />
    </Tooltip>
  )
}

export default AccountPopover
