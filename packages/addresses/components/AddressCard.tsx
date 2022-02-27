import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { Address } from '../models'

type Props = {
  address: Address
}

const AddressCard = (props: Props) => {
  const { address } = props

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {address.country}, {address.state}, {address.city}
        </Typography>
        <Typography variant="body1">
          {address.neighborhood}, {address.streetName} {address.intersection} #{' '}
          {address.streetNumber}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {address.comments}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AddressCard
