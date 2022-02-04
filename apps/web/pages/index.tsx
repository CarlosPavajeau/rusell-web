import { useUser } from '@auth0/nextjs-auth0'

const Web = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div>
      {user && (
        <>
          <p>
            <strong>{user.name}</strong>
          </p>
          <p>{user.email}</p>
        </>
      )}

      {user === undefined && <a href="/api/auth/login">Login</a>}
      {user !== undefined && <a href="/api/auth/logout">Logout</a>}
    </div>
  )
}

export default Web
