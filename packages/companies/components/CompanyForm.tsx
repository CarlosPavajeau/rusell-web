import { Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

import { CreateCompanyRequest } from '../models'

type Props = {
  onSubmit: (company: CreateCompanyRequest) => void
}
export const CompanyForm = (props: Props) => {
  const { onSubmit } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCompanyRequest>({
    defaultValues: {
      nit: undefined,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          label="Name"
          helperText={errors.name?.type === 'required' && 'Name is required'}
          error={!!errors.name}
          {...register('name', { required: true })}
        />

        <TextField label="Nit" {...register('nit')} />

        <TextField
          label="Info"
          helperText={errors.info?.type === 'required' && 'Info is required'}
          error={!!errors.info}
          {...register('info', { required: true })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          Register company
        </Button>
      </Stack>
    </form>
  )
}
