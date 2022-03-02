import { Button, Grid, Input, Spacer, Textarea } from '@nextui-org/react'
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
    formState: { errors, isSubmitting },
  } = useForm<CreateAddressRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid.Container gap={2}>
        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Country',
              description: 'Country field',
            })}
            helperText={errors.country?.message}
            helperColor="error"
            status={errors.country ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'State',
              description: 'State field',
            })}
            helperText={errors.state?.message}
            helperColor="error"
            status={errors.state ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'City',
              description: 'City field',
            })}
            helperText={errors.city?.message}
            helperColor="error"
            status={errors.city ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Neighborhood',
              description: 'Neighborhood field',
            })}
            helperText={errors.neighborhood?.message}
            helperColor="error"
            status={errors.neighborhood ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Street name',
              description: 'Street name field',
            })}
            helperText={errors.streetName?.message}
            helperColor="error"
            status={errors.streetName ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={6} md={3}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Intersection',
              description: 'Intersection field',
            })}
            labelLeft="#"
            helperText={errors.intersection?.message}
            helperColor="error"
            status={errors.intersection ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={6} md={3}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Street number',
              description: 'Street number field',
            })}
            labelLeft="-"
            helperText={errors.streetNumber?.message}
            helperColor="error"
            status={errors.streetNumber ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12}>
          <Textarea
            label={intl.formatMessage({
              defaultMessage: 'Comments',
              description: 'Comments field',
            })}
            helperText={errors.comments?.message}
            helperColor="error"
            status={errors.comments ? 'error' : 'default'}
            width="100%"
            rows={4}
            {...register('comments', {
              required: {
                value: false,
                message: intl.formatMessage({
                  defaultMessage: 'Please enter comments',
                  description: 'Error message for comments field',
                }),
              },
            })}
          />
        </Grid>
      </Grid.Container>

      <Spacer y={1} />

      <Button
        disabled={isSubmitting}
        type="submit"
        color="primary"
        size="lg"
        shadow
        rounded
      >
        <FormattedMessage defaultMessage="Submit" description="Submit button" />
      </Button>
    </form>
  )
}

export default AddressForm
