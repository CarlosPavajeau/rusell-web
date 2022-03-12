import { Button, Grid, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateAddressRequest } from '../../models'
import CityField from './city.field'
import CommentsField from './comments.field'
import CountryField from './country.field'
import IntersectionField from './intersection.field'
import NeighborhoodField from './neighborhood.field'
import StateField from './state.field'
import StreetNameField from './street-name.field'
import StreetNumberField from './street-number.field'

type Props = {
  onSubmit: (address: CreateAddressRequest) => void
}

const AddressForm: FC<Props> = ({ onSubmit }) => {
  const addressForm = useForm<CreateAddressRequest>()

  return (
    <FormProvider {...addressForm}>
      <form onSubmit={addressForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12} md={6}>
            <CountryField />
          </Grid>
          <Grid xs={12} md={6}>
            <StateField />
          </Grid>
          <Grid xs={12} md={6}>
            <CityField />
          </Grid>
          <Grid xs={12} md={6}>
            <NeighborhoodField />
          </Grid>
          <Grid xs={12} md={6}>
            <StreetNameField />
          </Grid>
          <Grid xs={6} md={3}>
            <IntersectionField />
          </Grid>
          <Grid xs={6} md={3}>
            <StreetNumberField />
          </Grid>
          <Grid xs={12}>
            <CommentsField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={addressForm.formState.isSubmitting}
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

export default AddressForm
