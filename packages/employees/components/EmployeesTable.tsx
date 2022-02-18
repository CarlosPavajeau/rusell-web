import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { FormattedMessage, useIntl } from 'react-intl'

import { Employees, EmployeeType } from '../models'

type Props = {
  employees: Employees
}

const EmployeeTypeChip = ({ type }: { type: EmployeeType }) => {
  const intl = useIntl()

  let label
  switch (type) {
    case EmployeeType.Dispatcher:
      label = intl.formatMessage({ defaultMessage: 'Driver' })
      break
    case EmployeeType.Driver:
      label = intl.formatMessage({ defaultMessage: 'Dispatcher' })
      break
    default:
      label = intl.formatMessage({ defaultMessage: 'Other' })
  }

  return <Chip label={label} />
}

const EmployeesTable = (props: Props) => {
  const { employees } = props
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <FormattedMessage defaultMessage="Id" />
            </TableCell>
            <TableCell>
              <FormattedMessage defaultMessage="Name" />
            </TableCell>
            <TableCell>
              <FormattedMessage defaultMessage="Type" />
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employees.map(employee => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.fullName}</TableCell>
              <TableCell>
                <EmployeeTypeChip type={employee.type} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesTable
