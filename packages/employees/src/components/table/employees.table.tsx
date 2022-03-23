import { Table } from '@nextui-org/react'
import { FC } from 'react'
import { useIntl } from 'react-intl'

import { Employee, Employees, EmployeeType } from '../../models'

type Props = {
  employees: Employees
}

const EmployeesTable: FC<Props> = ({ employees }) => {
  const intl = useIntl()

  const columns = [
    {
      key: 'id',
      label: intl.formatMessage({ defaultMessage: 'Id' }),
    },
    {
      key: 'fullName',
      label: intl.formatMessage({ defaultMessage: 'Name' }),
    },
    {
      key: 'type',
      label: intl.formatMessage({ defaultMessage: 'Type' }),
    },
  ]

  return (
    <Table containerCss={{ overflowX: 'auto' }}>
      <Table.Header columns={columns}>
        {column => <Table.Column key={column.key}>{column.label}</Table.Column>}
      </Table.Header>
      <Table.Body items={employees}>
        {item => (
          <Table.Row key={item.id}>
            {columnKey => (
              <Table.Cell>
                {columnKey !== 'type'
                  ? item[columnKey as keyof Employee]
                  : {
                      [EmployeeType.Driver]: intl.formatMessage({
                        defaultMessage: 'Driver',
                      }),
                      [EmployeeType.Dispatcher]: intl.formatMessage({
                        defaultMessage: 'Dispatcher',
                      }),
                      [EmployeeType.Other]: intl.formatMessage({
                        defaultMessage: 'Other',
                      }),
                    }[item.type]}
              </Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}

export default EmployeesTable
