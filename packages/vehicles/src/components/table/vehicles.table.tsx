import { Table } from '@nextui-org/react'
import { FC } from 'react'
import { useIntl } from 'react-intl'

import { Vehicle, Vehicles } from '../../models'

type Props = {
  vehicles: Vehicles
}

const VehiclesTable: FC<Props> = ({ vehicles }) => {
  const intl = useIntl()

  const columns = [
    {
      key: 'licensePlate',
      label: intl.formatMessage({ defaultMessage: 'License plate' }),
    },
    {
      key: 'type',
      label: intl.formatMessage({ defaultMessage: 'Type' }),
    },
    {
      key: 'mark',
      label: intl.formatMessage({ defaultMessage: 'Mark' }),
    },
    {
      key: 'model',
      label: intl.formatMessage({ defaultMessage: 'Model' }),
    },
    {
      key: 'color',
      label: intl.formatMessage({ defaultMessage: 'Color' }),
    },
    {
      key: 'chairs',
      label: intl.formatMessage({ defaultMessage: 'Chairs' }),
    },
    {
      key: 'driverName',
      label: intl.formatMessage({ defaultMessage: 'Driver name' }),
    },
  ]

  return (
    <Table containerCss={{ overflowX: 'auto' }}>
      <Table.Header columns={columns}>
        {column => <Table.Column key={column.key}>{column.label}</Table.Column>}
      </Table.Header>
      <Table.Body items={vehicles}>
        {item => (
          <Table.Row key={item.licensePlate}>
            {columnKey => (
              <Table.Cell>{item[columnKey as keyof Vehicle]}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}

export default VehiclesTable
