import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'
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
  const intl = useIntl()
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
          <InputLabel id="routeId">
            <FormattedMessage
              defaultMessage="Route"
              description="Route field"
            />
          </InputLabel>
          <Select
            labelId="routeId"
            label="Route"
            defaultValue=""
            {...register('routeId', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please select a route',
                  description: 'Error message for route field',
                }),
              },
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
          <InputLabel id="vehicleLicensePlate">
            <FormattedMessage
              defaultMessage="Vehicle"
              description="Vehicle field"
            />
          </InputLabel>
          <Select
            labelId="vehicleLicensePlate"
            label="Vehicle"
            defaultValue=""
            {...register('vehicleLicensePlate', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please select a vehicle',
                  description: 'Error message for vehicle field',
                }),
              },
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
          label={
            <FormattedMessage
              defaultMessage="Quota"
              description="Quota field"
            />
          }
          type="number"
          defaultValue={0}
          helperText={errors.quota?.message}
          error={!!errors.quota}
          {...register('quota', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a quota',
                description: 'Error message for quota field',
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
            defaultMessage="Create"
            description="Create button"
          />
        </Button>
      </Stack>
    </form>
  )
}

export default TransportSheetForm
