import { Button, Grid, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateTicketRequest } from '../../models'
import ClientField from './client.field'
import SeatsField from './seats.field'

type Props = {
  seatPrice: number

  onSubmit: (ticket: CreateTicketRequest) => void
}

const TicketForm: FC<Props> = ({ onSubmit, seatPrice }) => {
  const ticketForm = useForm<CreateTicketRequest>({
    defaultValues: {
      seatPrice,
    },
  })

  return (
    <FormProvider {...ticketForm}>
      <form onSubmit={ticketForm.handleSubmit(onSubmit)}>
        <Grid.Container>
          <Grid xs={12}>
            <ClientField />
          </Grid>

          <Grid xs={12}>
            <SeatsField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={ticketForm.formState.isSubmitting}
          type="submit"
          color="primary"
          size="lg"
          shadow
          rounded
        >
          <FormattedMessage
            defaultMessage="Submit"
            description="Submit button"
          />
        </Button>
      </form>
    </FormProvider>
  )
}

export default TicketForm
