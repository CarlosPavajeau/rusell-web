import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import ClientSelectOption from 'clients/components/ClientSelectOption'
import { Clients } from 'clients/models'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateBankDraftRequest } from '../models'

type Props = {
  onSubmit: (bankDraft: CreateBankDraftRequest) => void
  clients: Clients
  dispatcherId: string
}

const BankDraftForm = (props: Props) => {
  const { onSubmit, clients, dispatcherId } = props
  const intl = useIntl()
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
          <FormHelperText error={!!errors.senderId}>
            {errors?.senderId?.message}
          </FormHelperText>
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

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Amount"
              description="Amount field"
            />
          }
          type="number"
          helperText={errors.amount?.message}
          error={!!errors.amount}
          {...register('amount', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter an amount',
                description: 'Error message for amount field',
              }),
            },
          })}
        />

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

export default BankDraftForm
