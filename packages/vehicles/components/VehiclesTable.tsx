import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { FormattedMessage } from 'react-intl'

import { Vehicles } from '../models'

type Props = {
  vehicles: Vehicles
}

const VehiclesTable = (props: Props) => {
  const { vehicles } = props

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <FormattedMessage defaultMessage="License Plate" />
            </TableCell>
            <TableCell>
              <FormattedMessage defaultMessage="Type" />
            </TableCell>
            <TableCell>
              <FormattedMessage defaultMessage="Mark" />
            </TableCell>
            <TableCell>
              <FormattedMessage defaultMessage="Model" />
            </TableCell>
            <TableCell>
              <FormattedMessage defaultMessage="Color" />
            </TableCell>
            <TableCell>
              <FormattedMessage defaultMessage="Chairs" />
            </TableCell>
            <TableCell>
              <FormattedMessage defaultMessage="Diver name" />
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {vehicles.map(vehicle => (
            <TableRow key={vehicle.licensePlate}>
              <TableCell>{vehicle.licensePlate}</TableCell>
              <TableCell>{vehicle.type}</TableCell>
              <TableCell>{vehicle.mark}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.color}</TableCell>
              <TableCell>{vehicle.chairs}</TableCell>
              <TableCell>{vehicle.driverName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default VehiclesTable
