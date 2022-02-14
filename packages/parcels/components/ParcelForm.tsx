import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import ClientSelectOption from 'clients/components/ClientSelectOption'
import { Clients } from 'clients/models'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'
import { Vehicles } from 'vehicles/models'

import { CreateParcelRequest } from '../models'

type Props = {
  clients: Clients
  vehicles: Vehicles
  dispatcherId: string
  onSubmit: (parcel: CreateParcelRequest) => void
}

const ParcelForm = (props: Props) => {
  const { clients, vehicles, dispatcherId, onSubmit } = props
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateParcelRequest>({
    defaultValues: {
      dispatcherId,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl>
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

        <FormControl>
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

        <FormControl>
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
              <MenuItem key={vehicle.licensePlate} value={vehicle.licensePlate}>
                {vehicle.licensePlate}, {vehicle.model}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label={
            <FormattedMessage defaultMessage="Cost" description="Cost field" />
          }
          type="number"
          helperText={errors.cost?.message}
          error={!!errors.cost}
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

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Description"
              description="Description field"
            />
          }
          helperText={errors.description?.message}
          error={!!errors.description}
          multiline
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

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          <FormattedMessage
            defaultMessage="Create"
            description="Create button"
          />
        </Button>
      </Stack>
    </form>
  )
}

export default ParcelForm
