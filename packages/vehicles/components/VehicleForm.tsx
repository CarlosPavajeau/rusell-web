import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { Employees } from 'employees/models'
import { useForm } from 'react-hook-form'

import { CreateVehicleRequest } from '../models'

type Props = {
  onSubmit: (vehicle: CreateVehicleRequest) => void
  drivers: Employees
  others: Employees
}

const VehicleForm = (props: Props) => {
  const { onSubmit, drivers, others } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVehicleRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          label="License plate"
          helperText={errors.licensePlate?.message}
          error={!!errors.licensePlate}
          {...register('licensePlate', {
            required: { value: true, message: 'License plate is required' },
            pattern: {
              value: /^[A-Z]{3}-[0-9]{3}$/,
              message: 'License plate must be in the format AAA-999',
            },
          })}
        />

        <TextField
          label="Internal number"
          helperText={errors.internalNumber?.message}
          error={!!errors.internalNumber}
          {...register('internalNumber', {
            required: { value: true, message: 'Internal number is required' },
          })}
        />

        <TextField
          label="Property card number"
          helperText={errors.propertyCard?.message}
          error={!!errors.propertyCard}
          {...register('propertyCard', {
            required: {
              value: true,
              message: 'Property card number is required',
            },
          })}
        />

        <TextField
          label="Type"
          helperText={errors.type?.message}
          error={!!errors.type}
          {...register('type', {
            required: { value: true, message: 'Type is required' },
          })}
        />

        <TextField
          label="Mark"
          helperText={errors.mark?.message}
          error={!!errors.mark}
          {...register('mark', {
            required: { value: true, message: 'Mark is required' },
          })}
        />

        <TextField
          label="Model"
          helperText={errors.model?.message}
          error={!!errors.model}
          {...register('model', {
            required: { value: true, message: 'Model is required' },
          })}
        />

        <TextField
          label="Model number"
          helperText={errors.modelNumber?.message}
          error={!!errors.modelNumber}
          {...register('modelNumber', {
            required: { value: true, message: 'Model number is required' },
          })}
        />

        <TextField
          label="Color"
          helperText={errors.color?.message}
          error={!!errors.color}
          {...register('color', {
            required: { value: true, message: 'Color is required' },
          })}
        />

        <TextField
          label="Chairs"
          type="number"
          helperText={errors.chairs?.message}
          error={!!errors.chairs}
          {...register('chairs', {
            required: { value: true, message: 'Chairs is required' },
          })}
        />

        <TextField
          label="Engine number"
          helperText={errors.engineNumber?.message}
          error={!!errors.engineNumber}
          {...register('engineNumber', {
            required: { value: true, message: 'Engine number is required' },
          })}
        />

        <TextField
          label="Chassis number"
          helperText={errors.chassisNumber?.message}
          error={!!errors.chassisNumber}
          {...register('chassisNumber', {
            required: { value: true, message: 'Chassis number is required' },
          })}
        />

        <FormControl>
          <InputLabel id="driver">Driver</InputLabel>
          <Select
            labelId="driver"
            label="Driver"
            defaultValue=""
            {...register('driverId', {
              required: { value: true, message: 'Driver is required' },
            })}
          >
            {drivers.map(employee => (
              <MenuItem key={employee.id} value={employee.id}>
                {employee.id}, {employee.fullName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="owner">Owner</InputLabel>
          <Select
            labelId="owner"
            label="Owner"
            defaultValue=""
            {...register('ownerId', {
              required: { value: true, message: 'Owner is required' },
            })}
          >
            {others.map(employee => (
              <MenuItem key={employee.id} value={employee.id}>
                {employee.id}, {employee.fullName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          Register vehicle
        </Button>
      </Stack>
    </form>
  )
}

export default VehicleForm
