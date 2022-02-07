import { Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

import { CreateAddressRequest } from '../models'

type Props = {
  onSubmit: (address: CreateAddressRequest) => void
}

const AddressForm = (props: Props) => {
  const { onSubmit } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAddressRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="Country"
          helperText={
            errors.country?.type === 'required' && 'Country is required'
          }
          error={!!errors.country}
          {...register('country', { required: true })}
        />

        <TextField
          label="State"
          helperText={errors.state?.type === 'required' && 'State is required'}
          error={!!errors.state}
          {...register('state', { required: true })}
        />

        <TextField
          label="City"
          helperText={errors.city?.type === 'required' && 'City is required'}
          error={!!errors.city}
          {...register('city', { required: true })}
        />

        <TextField
          label="Neighborhood"
          helperText={
            errors.neighborhood?.type === 'required' &&
            'Neighborhood is required'
          }
          error={!!errors.neighborhood}
          {...register('neighborhood', { required: true })}
        />

        <TextField
          label="Street Name"
          helperText={
            errors.streetName?.type === 'required' && 'Street name is required'
          }
          error={!!errors.streetName}
          {...register('streetName', { required: true })}
        />

        <TextField
          label="Intersection"
          helperText={
            errors.intersection?.type === 'required' &&
            'Intersection is required'
          }
          error={!!errors.intersection}
          {...register('intersection', { required: true })}
        />

        <TextField
          label="Street number"
          helperText={
            errors.streetNumber?.type === 'required' &&
            'Street number is required'
          }
          error={!!errors.streetNumber}
          {...register('streetNumber', { required: true })}
        />

        <TextField
          label="Comments"
          helperText={
            errors.comments?.type === 'required' && 'Comments is required'
          }
          error={!!errors.comments}
          {...register('comments', { required: true })}
          multiline
          rows={4}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          Register address
        </Button>
      </Stack>
    </form>
  )
}

export default AddressForm
