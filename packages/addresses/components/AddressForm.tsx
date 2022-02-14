import { Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateAddressRequest } from '../models'

type Props = {
  onSubmit: (address: CreateAddressRequest) => void
}

const AddressForm = (props: Props) => {
  const { onSubmit } = props
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAddressRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label={
            <FormattedMessage
              defaultMessage="Country"
              description="Country field"
            />
          }
          helperText={errors.country?.message}
          error={!!errors.country}
          {...register('country', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a country',
                description: 'Error message for country field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="State"
              description="State field"
            />
          }
          helperText={errors.state?.message}
          error={!!errors.state}
          {...register('state', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a state',
                description: 'Error message for state field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage defaultMessage="City" description="City field" />
          }
          helperText={errors.city?.message}
          error={!!errors.city}
          {...register('city', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a city',
                description: 'Error message for city field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Neighborhood"
              description="Neighborhood field"
            />
          }
          helperText={errors.neighborhood?.message}
          error={!!errors.neighborhood}
          {...register('neighborhood', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a neighborhood',
                description: 'Error message for neighborhood field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Street name"
              description="Street name field"
            />
          }
          helperText={errors.streetName?.message}
          error={!!errors.streetName}
          {...register('streetName', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a street name',
                description: 'Error message for street name field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Intersection"
              description="Intersection field"
            />
          }
          helperText={errors.intersection?.message}
          error={!!errors.intersection}
          {...register('intersection', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter an intersection',
                description: 'Error message for intersection field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Street number"
              description="Street number field"
            />
          }
          helperText={errors.streetNumber?.message}
          error={!!errors.streetNumber}
          {...register('streetNumber', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a street number',
                description: 'Error message for street number field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Comments"
              description="Comments field"
            />
          }
          helperText={errors.comments?.message}
          error={!!errors.comments}
          {...register('comments', {
            required: {
              value: false,
              message: intl.formatMessage({
                defaultMessage: 'Please enter comments',
                description: 'Error message for comments field',
              }),
            },
          })}
          multiline
          rows={4}
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

export default AddressForm
