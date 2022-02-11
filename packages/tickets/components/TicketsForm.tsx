import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import ClientSelectOption from 'clients/components/ClientSelectOption'
import { Clients } from 'clients/models'
import { useForm } from 'react-hook-form'

import { CreateTicketRequest } from '../models'

type Props = {
  clients: Clients
  seatPrice: number
  onSubmit: (data: CreateTicketRequest) => void
}

const TicketsForm = (props: Props) => {
  const { clients, seatPrice, onSubmit } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTicketRequest>({
    defaultValues: {
      seatPrice,
    },
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl>
          <InputLabel id="client">Client</InputLabel>
          <Select
            labelId="client"
            label="Client"
            defaultValue=""
            {...register('clientId', {
              required: { value: true, message: 'Client is required' },
            })}
          >
            {clients.map(client => (
              <ClientSelectOption client={client} key={client.id} />
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Seats"
          type="number"
          helperText={errors.seats?.message}
          error={!!errors.seats}
          {...register('seats', {
            required: { value: true, message: 'Seats is required' },
          })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          Register ticket
        </Button>
      </Stack>
    </form>
  )
}

export default TicketsForm
