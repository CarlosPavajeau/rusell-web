import { Button, Grid, Spacer } from '@nextui-org/react'
import { FC, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateTransportSheetRequest } from '../../models'
import RouteField from './route.field'
import VehicleField from './vehicle.field'

type Props = {
  dispatcherId?: string
  onSubmit: (transportSheet: CreateTransportSheetRequest) => void
}

const TransportSheetForm: FC<Props> = ({ onSubmit, dispatcherId }) => {
  const transportSheetForm = useForm<CreateTransportSheetRequest>()

  useEffect(() => {
    transportSheetForm.reset({
      dispatcherId,
    })
  }, [dispatcherId, transportSheetForm])

  return (
    <FormProvider {...transportSheetForm}>
      <form onSubmit={transportSheetForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <RouteField />
          </Grid>

          <Grid xs={12}>
            <VehicleField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={transportSheetForm.formState.isSubmitting}
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

export default TransportSheetForm
