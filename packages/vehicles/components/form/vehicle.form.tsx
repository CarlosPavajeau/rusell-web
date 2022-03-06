import { Button, Grid, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateVehicleRequest } from '../../models'
import ChairsField from './chairs.field'
import ChassisNumberField from './chassis-number.field'
import ColorField from './color.field'
import DriverField from './driver.field'
import EngineNumberField from './engine-number.field'
import InternalNumberField from './internal-number.field'
import LicensePlateField from './license-plate.field'
import MarkField from './mark.field'
import ModelField from './model.field'
import ModelNumberField from './model-number.field'
import OwnerField from './owner.field'
import PropertyCardNumberField from './property-card-number.field'
import TypeField from './type.field'

type Props = {
  onSubmit: (vehicle: CreateVehicleRequest) => void
}

const VehicleForm: FC<Props> = ({ onSubmit }) => {
  const vehicleForm = useForm<CreateVehicleRequest>()

  return (
    <FormProvider {...vehicleForm}>
      <form onSubmit={vehicleForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <LicensePlateField />
          </Grid>

          <Grid xs={12} md={6}>
            <InternalNumberField />
          </Grid>

          <Grid xs={12} md={6}>
            <PropertyCardNumberField />
          </Grid>

          <Grid xs={12} md={6}>
            <TypeField />
          </Grid>

          <Grid xs={12} md={6}>
            <MarkField />
          </Grid>

          <Grid xs={12} md={6}>
            <ModelField />
          </Grid>

          <Grid xs={12} md={6}>
            <ModelNumberField />
          </Grid>

          <Grid xs={12} md={6}>
            <ColorField />
          </Grid>

          <Grid xs={12} md={6}>
            <ChairsField />
          </Grid>

          <Grid xs={12} md={6}>
            <EngineNumberField />
          </Grid>

          <Grid xs={12} md={6}>
            <ChassisNumberField />
          </Grid>

          <Grid xs={12} md={6}>
            <DriverField />
          </Grid>

          <Grid xs={12} md={6}>
            <OwnerField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={vehicleForm.formState.isSubmitting}
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

export default VehicleForm
