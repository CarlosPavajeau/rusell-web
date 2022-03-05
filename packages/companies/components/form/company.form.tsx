import { Button, Grid, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateCompanyRequest } from '../../models'
import InfoField from './info.field'
import NameField from './name.field'
import NitField from './nit.field'

type Props = {
  onSubmit: (company: CreateCompanyRequest) => void
}

const CompanyForm: FC<Props> = ({ onSubmit }) => {
  const companyForm = useForm<CreateCompanyRequest>()

  return (
    <FormProvider {...companyForm}>
      <form onSubmit={companyForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <NameField />
          </Grid>

          <Grid xs={12}>
            <NitField />
          </Grid>

          <Grid xs={12}>
            <InfoField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={companyForm.formState.isSubmitting}
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

export default CompanyForm
