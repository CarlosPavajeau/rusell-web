import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { Button, Grid, Input, Spacer } from '@nextui-org/react'
import ClientSelectOption from 'clients/components/ClientSelectOption'
import { Clients } from 'clients/models'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateBankDraftRequest } from '../models'

type Props = {
  onSubmit: (bankDraft: CreateBankDraftRequest) => void
  clients: Clients
  dispatcherId: string
}

const BankDraftForm: FC<Props> = ({ onSubmit, clients, dispatcherId }) => {
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateBankDraftRequest>({
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
            <FormHelperText error={!!errors.senderId}>
              {errors?.senderId?.message}
            </FormHelperText>
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

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Amount',
              description: 'Amount field',
            })}
            type="number"
            helperText={errors.amount?.message}
            helperColor="error"
            status={errors.amount ? 'error' : 'default'}
            size="lg"
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Cost',
              description: 'Cost field',
            })}
            type="number"
            helperText={errors.cost?.message}
            helperColor="error"
            status={errors.cost ? 'error' : 'default'}
            size="lg"
            width="100%"
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

export default BankDraftForm
