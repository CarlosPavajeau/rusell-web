import { Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

import { CreateClientRequest } from '../models'

type Props = {
  onSubmit: (client: CreateClientRequest) => void
}

const ClientForm = (props: Props) => {
  const { onSubmit } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClientRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          label="Id"
          helperText={errors.id?.type === 'required' && 'Id is required'}
          error={!!errors.id}
          {...register('id', { required: true })}
        />

        <TextField
          label="First name"
          helperText={
            errors.firstName?.type === 'required' && 'First name is required'
          }
          error={!!errors.firstName}
          {...register('firstName', { required: true })}
        />

        <TextField
          label="Middle name"
          error={!!errors.middleName}
          {...register('middleName')}
        />

        <TextField
          label="First surname"
          helperText={
            errors.firstSurname?.type === 'required' &&
            'First surname is required'
          }
          error={!!errors.firstSurname}
          {...register('firstSurname', { required: true })}
        />

        <TextField
          label="Second surname"
          error={!!errors.secondSurname}
          {...register('secondSurname')}
        />

        <TextField
          label="Phone number"
          helperText={
            errors.phoneNumber?.type === 'required' &&
            'Phone number is required'
          }
          error={!!errors.phoneNumber}
          {...register('phoneNumber', { required: true })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          Register client
        </Button>
      </Stack>
    </form>
  )
}

export default ClientForm
