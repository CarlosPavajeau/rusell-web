import { Button, Grid, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateVehicleLegalInformationRequest } from '../../../models'
import DueDateField from './due-date.field'
import RenovationDateField from './renovation-date.field'
import TypeField from './type.field'

type Props = {
  onSubmit: (legalInformation: CreateVehicleLegalInformationRequest) => void
}

const LegalInformationForm: FC<Props> = ({ onSubmit }) => {
  const vehicleLegalInformationForm =
    useForm<CreateVehicleLegalInformationRequest>()

  return (
    <FormProvider {...vehicleLegalInformationForm}>
      <form onSubmit={vehicleLegalInformationForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <TypeField />
          </Grid>

          <Grid xs={12}>
            <DueDateField />
          </Grid>

          <Grid xs={12}>
            <RenovationDateField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={vehicleLegalInformationForm.formState.isSubmitting}
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

export default LegalInformationForm
