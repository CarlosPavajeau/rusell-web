import { Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateCompanyRequest } from '../models'

type Props = {
  onSubmit: (company: CreateCompanyRequest) => void
}
export const CompanyForm = (props: Props) => {
  const { onSubmit } = props
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateCompanyRequest>({
    defaultValues: {
      nit: undefined,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label={
            <FormattedMessage defaultMessage="Name" description="Name field" />
          }
          helperText={errors?.name?.message}
          error={!!errors.name}
          {...register('name', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a name',
                description: 'Error message for name field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage defaultMessage="Nit" description="Nit field" />
          }
          {...register('nit')}
        />

        <TextField
          label={
            <FormattedMessage defaultMessage="Info" description="Info field" />
          }
          helperText={errors?.info?.message}
          error={!!errors.info}
          {...register('info', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter an info',
                description: 'Error message for info field',
              }),
            },
          })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          sx={{ width: 'fit-content' }}
        >
          <FormattedMessage
            defaultMessage="Submit"
            description="Submit button"
          />
        </Button>
      </Stack>
    </form>
  )
}
