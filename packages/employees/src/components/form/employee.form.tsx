import { Button, Grid, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateEmployeeRequest, EmployeeType } from '../../models'
import EmailField from './email.field'
import EmployeeTypeField from './employee-type.field'
import FirstNameField from './first-name.field'
import FirstSurnameField from './first-surname.field'
import IdField from './id.field'
import MiddleNameField from './middle-name.field'
import PhoneNumberField from './phone-number.field'
import SecondSurnameField from './second-surname.field'

type Props = {
  onSubmit: (employee: CreateEmployeeRequest) => void
}

const EmployeeForm: FC<Props> = ({ onSubmit }) => {
  const employeeForm = useForm<CreateEmployeeRequest>({
    defaultValues: {
      type: EmployeeType.Dispatcher,
    },
  })

  return (
    <FormProvider {...employeeForm}>
      <form onSubmit={employeeForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
            <IdField />
          </Grid>

          <Grid xs={12} md={6}>
            <FirstNameField />
          </Grid>

          <Grid xs={12} md={6}>
            <MiddleNameField />
          </Grid>

          <Grid xs={12} md={6}>
            <FirstSurnameField />
          </Grid>

          <Grid xs={12} md={6}>
            <SecondSurnameField />
          </Grid>

          <Grid xs={12} md={6}>
            <EmailField />
          </Grid>

          <Grid xs={12} md={6}>
            <PhoneNumberField />
          </Grid>

          <Spacer y={1} />

          <Grid xs={12}>
            <EmployeeTypeField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={employeeForm.formState.isSubmitting}
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

export default EmployeeForm
