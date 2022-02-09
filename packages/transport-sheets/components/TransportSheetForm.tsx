import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Routes } from 'routes/models'
import { Vehicles } from 'vehicles/models'

import { CreateTransportSheetRequest } from '../models'

type Props = {
  onSubmit: (data: CreateTransportSheetRequest) => void
  routes: Routes
  vehicles: Vehicles
  dispatcherId: string
}

const TransportSheetForm = (props: Props) => {
  const { onSubmit, routes, vehicles, dispatcherId } = props
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateTransportSheetRequest>({
    defaultValues: {
      dispatcherId,
    },
  })

  const vehicleLicensePlate = watch('vehicleLicensePlate')
  useEffect(() => {
    const vehicle = vehicles.find(
      vehicle => vehicle.licensePlate === vehicleLicensePlate,
    )
    if (vehicle) {
      setValue('quota', vehicle.chairs)
    }
  }, [setValue, vehicleLicensePlate, vehicles])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl>
          <InputLabel id="routeId">Route</InputLabel>
          <Select
            labelId="routeId"
            label="Route"
            defaultValue=""
            {...register('routeId', {
              required: { value: true, message: 'Route is required' },
            })}
          >
            {routes.map(route => (
              <MenuItem key={route.id} value={route.id}>
                From {route.from} to {route.to}, Cost: {route.cost}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="vehicleLicensePlate">Vehicle</InputLabel>
          <Select
            labelId="vehicleLicensePlate"
            label="Vehicle"
            defaultValue=""
            {...register('vehicleLicensePlate', {
              required: { value: true, message: 'Vehicle is required' },
            })}
          >
            {vehicles.map(vehicle => (
              <MenuItem key={vehicle.licensePlate} value={vehicle.licensePlate}>
                {vehicle.licensePlate}, {vehicle.model}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Quota"
          type="number"
          defaultValue={0}
          helperText={errors.quota?.message}
          error={!!errors.quota}
          {...register('quota', {
            required: { value: true, message: 'Quota is required' },
          })}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          Register transport sheet
        </Button>
      </Stack>
    </form>
  )
}

export default TransportSheetForm
