import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Button, Grid, Input, Spacer, Textarea } from '@nextui-org/react'
import ClientSelectOption from '@rusell/clients/components/ClientSelectOption'
import { Clients } from '@rusell/clients/models'
import { Vehicles } from '@rusell/vehicles/models'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateParcelRequest } from '../models'

type Props = {
  clients: Clients
  vehicles: Vehicles
  dispatcherId: string
  onSubmit: (parcel: CreateParcelRequest) => void
}

const ParcelForm: FC<Props> = ({
  clients,
  vehicles,
  dispatcherId,
  onSubmit,
}) => {
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateParcelRequest>({
    defaultValues: {
      dispatcherId,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid.Container gap={2}>
        <Grid xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="sender">
              <FormattedMessage
                defaultMessage="Sender"
                description="Sender field"
              />
            </InputLabel>
            <Select
              labelId="sender"
              label="Sender"
              defaultValue=""
              {...register('senderId', {
                required: {
                  value: true,
                  message: intl.formatMessage({
                    defaultMessage: 'Please select a sender',
                    description: 'Error message for sender field',
                  }),
                },
              })}
            >
              {clients
                .filter(client => client.id !== watch('receiverId'))
                .map(client => (
                  <ClientSelectOption client={client} key={client.id} />
                ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="receiver">
              <FormattedMessage
                defaultMessage="Receiver"
                description="Receiver field"
              />
            </InputLabel>
            <Select
              labelId="receiver"
              label="receiver"
              defaultValue=""
              {...register('receiverId', {
                required: {
                  value: true,
                  message: intl.formatMessage({
                    defaultMessage: 'Please select a receiver',
                    description: 'Error message for receiver field',
                  }),
                },
              })}
            >
              {clients
                .filter(client => client.id !== watch('senderId'))
                .map(client => (
                  <ClientSelectOption client={client} key={client.id} />
                ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12}>
          <FormControl fullWidth>
            <InputLabel id="vehicle">
              <FormattedMessage
                defaultMessage="Vehicle"
                description="Vehicle field"
              />
            </InputLabel>
            <Select
              labelId="vehicle"
              label="Vehicle"
              defaultValue=""
              {...register('vehicleLicensePlate', {
                required: {
                  value: true,
                  message: intl.formatMessage({
                    defaultMessage: 'Please select a vehicle',
                    description: 'Error message for vehicle field',
                  }),
                },
              })}
            >
              {vehicles.map(vehicle => (
                <MenuItem
                  key={vehicle.licensePlate}
                  value={vehicle.licensePlate}
                >
                  {vehicle.licensePlate}, {vehicle.model}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Cost',
              description: 'Cost field',
            })}
            helperText={errors.cost?.message}
            helperColor="error"
            status={errors.cost ? 'error' : 'default'}
            width="100%"
            type="number"
            {...register('cost', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please enter a cost',
                  description: 'Error message for cost field',
                }),
              },
            })}
          />
        </Grid>

        <Grid xs={12}>
          <Textarea
            label={intl.formatMessage({
              defaultMessage: 'Description',
              description: 'Description field',
            })}
            helperText={errors.description?.message}
            helperColor="error"
            status={errors.description ? 'error' : 'default'}
            width="100%"
            rows={4}
            {...register('description', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please enter a description',
                  description: 'Error message for description field',
                }),
              },
            })}
          />
        </Grid>
      </Grid.Container>

      <Spacer y={1} />

      <Button
        disabled={isSubmitting}
        type="submit"
        color="primary"
        size="lg"
        shadow
        rounded
      >
        <FormattedMessage defaultMessage="Create" description="Create button" />
      </Button>
    </form>
  )
}

export default ParcelForm
