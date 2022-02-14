import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateClientRequest } from '../models'

type Props = {
  onSubmit: (client: CreateClientRequest) => void
}

const ClientForm = (props: Props) => {
  const { onSubmit } = props
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClientRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          label={
            <FormattedMessage defaultMessage="Id" description="Id field" />
          }
          helperText={errors?.id?.message}
          error={!!errors.id}
          {...register('id', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter an id',
                description: 'Error message for id field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="First name"
              description="First name field"
            />
          }
          helperText={errors?.firstName?.message}
          error={!!errors.firstName}
          {...register('firstName', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a first name',
                description: 'Error message for first name field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Middle name"
              description="Middle name field"
            />
          }
          error={!!errors.middleName}
          {...register('middleName')}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="First surname"
              description="First surname field"
            />
          }
          helperText={errors?.firstSurname?.message}
          error={!!errors.firstSurname}
          {...register('firstSurname', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a first surname',
                description: 'Error message for first surname field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Second surname"
              description="Second surname field"
            />
          }
          error={!!errors.secondSurname}
          {...register('secondSurname')}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Phone number"
              description="Phone number field"
            />
          }
          helperText={errors?.phoneNumber?.message}
          error={!!errors.phoneNumber}
          {...register('phoneNumber', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a phone number',
                description: 'Error message for phone number field',
              }),
            },
          })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
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

export default ClientForm
