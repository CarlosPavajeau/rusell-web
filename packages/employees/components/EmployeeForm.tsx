import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material'
import { useForm } from 'react-hook-form'

import { CreateEmployeeRequest, EmployeeType } from '../models'

type Props = {
  onSubmit: (employee: CreateEmployeeRequest) => void
}

const EmployeeForm = (props: Props) => {
  const { onSubmit } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEmployeeRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          label="Id"
          helperText={errors.id?.message}
          error={!!errors.id}
          {...register('id', {
            required: { value: true, message: 'Id is required' },
          })}
        />

        <TextField
          label="First name"
          helperText={errors.firstName?.message}
          error={!!errors.firstName}
          {...register('firstName', {
            required: { value: true, message: 'First name is required' },
          })}
        />

        <TextField
          label="Middle name"
          error={!!errors.middleName}
          {...register('middleName')}
        />

        <TextField
          label="First surname"
          helperText={errors.firstSurname?.message}
          error={!!errors.firstSurname}
          {...register('firstSurname', {
            required: { value: true, message: 'First surname is required' },
          })}
        />

        <TextField
          label="Second surname"
          error={!!errors.secondSurname}
          {...register('secondSurname')}
        />

        <TextField
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email', {
            required: { value: true, message: 'Email is required' },
            pattern: { value: /^\S+@\S+$/i, message: 'Email is invalid' },
          })}
        />

        <TextField
          label="Phone number"
          helperText={errors.phoneNumber?.message}
          error={!!errors.phoneNumber}
          {...register('phoneNumber', {
            required: { value: true, message: 'Phone number is required' },
            pattern: {
              value: /^\+?[0-9]{10,15}$/i,
              message: 'Phone number is invalid',
            },
          })}
        />

        <FormControl>
          <InputLabel id="employee-type">Employee type</InputLabel>
          <Select
            labelId="employee-type"
            label="Employee type"
            {...register('type', {
              required: { value: true, message: 'Employee type is required' },
            })}
          >
            <MenuItem value={EmployeeType.Dispatcher}>Dispatcher</MenuItem>
            <MenuItem value={EmployeeType.Driver}>Driver</MenuItem>
            <MenuItem value={EmployeeType.Other}>Other</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          Register employee
        </Button>
      </Stack>
    </form>
  )
}

export default EmployeeForm
