import { Button, Grid, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { CreateBankDraftRequest } from '../../models'
import AmountField from './amount.field'
import CostField from './cost.field'
import ReceiverField from './receiver.field'
import SenderField from './sender.field'

type Props = {
  onSubmit: (bankDraft: CreateBankDraftRequest) => void
}

const BankDraftForm: FC<Props> = ({ onSubmit }) => {
  const bankDraftForm = useForm<CreateBankDraftRequest>()

  return (
    <FormProvider {...bankDraftForm}>
      <form onSubmit={bankDraftForm.handleSubmit(onSubmit)}>
        <Grid.Container gap={2}>
          <Grid xs={12} md={6}>
            <SenderField />
          </Grid>

          <Grid xs={12} md={6}>
            <ReceiverField />
          </Grid>

          <Grid xs={12} md={6}>
            <AmountField />
          </Grid>

          <Grid xs={12} md={6}>
            <CostField />
          </Grid>
        </Grid.Container>

        <Spacer y={1} />

        <Button
          disabled={bankDraftForm.formState.isSubmitting}
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

export default BankDraftForm
