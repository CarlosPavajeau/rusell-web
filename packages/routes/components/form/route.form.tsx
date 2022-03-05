import { Button, Grid, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateRouteRequest } from '../../models'
import CostField from './cost.field'
import FromField from './from.field'
import IsCustomerDroppedOffAtHomeField from './is-customer-dropped-off-at-home.field'
import IsCustomerPickedUpAtHomeField from './is-customer-picked-up-at-home.field'
import ToField from './to.field'

type Props = {
  onSubmit: (route: CreateRouteRequest) => void
}

const RouteForm: FC<Props> = ({ onSubmit }) => {
  const routeForm = useForm<CreateRouteRequest>()

  return (
    <FormProvider {...routeForm}>
      <form onSubmit={routeForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12} md={6}>
            <FromField />
          </Grid>

          <Grid xs={12} md={6}>
            <ToField />
          </Grid>

          <Grid xs={12}>
            <CostField />
          </Grid>

          <Grid xs={12} md={6} css={{ mt: '12px' }}>
            <IsCustomerPickedUpAtHomeField />
          </Grid>

          <Grid xs={12} md={6} css={{ mt: '12px' }}>
            <IsCustomerDroppedOffAtHomeField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={routeForm.formState.isSubmitting}
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

export default RouteForm
