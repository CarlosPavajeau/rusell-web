import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import ClientSelectOption from 'clients/components/ClientSelectOption'
import { Clients } from 'clients/models'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateTicketRequest } from '../models'

type Props = {
  clients: Clients
  seatPrice: number
  onSubmit: (data: CreateTicketRequest) => void
}

const TicketsForm = (props: Props) => {
  const { clients, seatPrice, onSubmit } = props
  const intl = useIntl()
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
          <InputLabel id="client">
            <FormattedMessage
              defaultMessage="Client"
              description="Client field"
            />
          </InputLabel>
          <Select
            labelId="client"
            label="Client"
            defaultValue=""
            {...register('clientId', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please select a client',
                  description: 'Error message for client field',
                }),
              },
            })}
          >
            {clients.map(client => (
              <ClientSelectOption client={client} key={client.id} />
            ))}
          </Select>
        </FormControl>

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Seats"
              description="Seats field"
            />
          }
          type="number"
          helperText={errors.seats?.message}
          error={!!errors.seats}
          {...register('seats', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter the number of seats',
                description: 'Error message for seats field',
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

export default TicketsForm
