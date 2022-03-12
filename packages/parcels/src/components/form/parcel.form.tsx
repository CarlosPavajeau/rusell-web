import { Button, Grid, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateParcelRequest } from '../../models'
import CostField from './cost.field'
import DescriptionField from './description.field'
import ReceiverField from './receiver.field'
import SenderField from './sender.field'
import VehicleField from './vehicle.field'

type Props = {
  onSubmit: (parcel: CreateParcelRequest) => void
}

const ParcelForm: FC<Props> = ({ onSubmit }) => {
  const parcelForm = useForm<CreateParcelRequest>()

  return (
    <FormProvider {...parcelForm}>
      <form onSubmit={parcelForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12} md={6}>
            <SenderField />
          </Grid>

          <Grid xs={12} md={6}>
            <ReceiverField />
          </Grid>

          <Grid xs={12}>
            <VehicleField />
          </Grid>

          <Grid xs={12}>
            <CostField />
          </Grid>

          <Grid xs={12}>
            <DescriptionField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={parcelForm.formState.isSubmitting}
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

export default ParcelForm
