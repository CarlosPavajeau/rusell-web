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
          <InputLabel id="sender">Sender</InputLabel>
          <Select
            labelId="sender"
            label="Sender"
            defaultValue=""
            {...register('senderId', {
              required: { value: true, message: 'Sender is required' },
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
          <InputLabel id="receiver">Receiver</InputLabel>
          <Select
            labelId="receiver"
            label="receiver"
            defaultValue=""
            {...register('receiverId', {
              required: { value: true, message: 'Receiver is required' },
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
          <InputLabel id="vehicle">Vehicle</InputLabel>
          <Select
            labelId="vehicle"
            label="Vehicle"
            defaultValue=""
            {...register('vehicleLicensePlate', {
              required: { value: true, message: 'Vehicle is required' },
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
          label="Cost"
          type="number"
          helperText={errors.cost?.message}
          error={!!errors.cost}
          {...register('cost', {
            required: { value: true, message: 'Cost is required' },
          })}
        />

        <TextField
          label="Description"
          helperText={errors.description?.message}
          error={!!errors.description}
          multiline
          rows={4}
          {...register('description', {
            required: { value: true, message: 'Description is required' },
          })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          Register parcel
        </Button>
      </Stack>
    </form>
  )
}

export default ParcelForm
