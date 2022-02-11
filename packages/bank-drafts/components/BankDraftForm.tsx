import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import ClientSelectOption from 'clients/components/ClientSelectOption'
import { Clients } from 'clients/models'
import { useForm } from 'react-hook-form'

import { CreateBankDraftRequest } from '../models'

type Props = {
  onSubmit: (bankDraft: CreateBankDraftRequest) => void
  clients: Clients
  dispatcherId: string
}

const BankDraftForm = (props: Props) => {
  const { onSubmit, clients, dispatcherId } = props
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateBankDraftRequest>({
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

        <TextField
          label="Amount"
          type="number"
          helperText={errors.amount?.message}
          error={!!errors.amount}
          {...register('amount', {
            required: { value: true, message: 'Amount is required' },
          })}
        />

        <TextField
          label="Cost"
          type="number"
          helperText={errors.cost?.message}
          error={!!errors.cost}
          {...register('cost', {
            required: { value: true, message: 'Cost is required' },
          })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          Register bank draft
        </Button>
      </Stack>
    </form>
  )
}

export default BankDraftForm
