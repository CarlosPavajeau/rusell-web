import MenuItem from '@mui/material/MenuItem'

import { Client } from '../models'

type Props = {
  client: Client
}

const ClientSelectOption = (props: Props) => {
  const { client } = props

  return (
    <MenuItem key={client.id} value={client.id}>
      {client.id}, {client.fullName}
    </MenuItem>
  )
}

export default ClientSelectOption
