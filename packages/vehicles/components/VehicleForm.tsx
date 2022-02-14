import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { Employees } from 'employees/models'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../models'

type Props = {
  onSubmit: (vehicle: CreateVehicleRequest) => void
  drivers: Employees
  others: Employees
}

const VehicleForm = (props: Props) => {
  const { onSubmit, drivers, others } = props
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVehicleRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          label={
            <FormattedMessage
              defaultMessage="License plate"
              description="license plate field"
            />
          }
          helperText={errors.licensePlate?.message}
          error={!!errors.licensePlate}
          {...register('licensePlate', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a license plate',
                description: 'Error message for license plate field',
              }),
            },
            pattern: {
              value: /^[A-Z]{3}-[0-9]{3}$/,
              message: intl.formatMessage({
                defaultMessage:
                  'Please enter a valid license plate (e.g. ABC-123)',
                description: 'Error message for license plate field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Internal number"
              description="Internal number field"
            />
          }
          helperText={errors.internalNumber?.message}
          error={!!errors.internalNumber}
          {...register('internalNumber', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter an internal number',
                description: 'Error message for internal number field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Property card number"
              description="Property card number field"
            />
          }
          helperText={errors.propertyCard?.message}
          error={!!errors.propertyCard}
          {...register('propertyCard', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a property card number',
                description: 'Error message for property card number field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage defaultMessage="Type" description="Type field" />
          }
          helperText={errors.type?.message}
          error={!!errors.type}
          {...register('type', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a type',
                description: 'Error message for type field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage defaultMessage="Mark" description="Mark field" />
          }
          helperText={errors.mark?.message}
          error={!!errors.mark}
          {...register('mark', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a mark',
                description: 'Error message for mark field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Model"
              description="Model field"
            />
          }
          helperText={errors.model?.message}
          error={!!errors.model}
          {...register('model', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a model',
                description: 'Error message for model field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Model number"
              description="Model number field"
            />
          }
          helperText={errors.modelNumber?.message}
          error={!!errors.modelNumber}
          {...register('modelNumber', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a model number',
                description: 'Error message for model number field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Color"
              description="Color field"
            />
          }
          helperText={errors.color?.message}
          error={!!errors.color}
          {...register('color', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a color',
                description: 'Error message for color field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Chairs"
              description="Chairs field"
            />
          }
          type="number"
          helperText={errors.chairs?.message}
          error={!!errors.chairs}
          {...register('chairs', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a number of chairs',
                description: 'Error message for chairs field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Engine number"
              description="Engine number field"
            />
          }
          helperText={errors.engineNumber?.message}
          error={!!errors.engineNumber}
          {...register('engineNumber', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter an engine number',
                description: 'Error message for engine number field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Chassis number"
              description="Chassis number field"
            />
          }
          helperText={errors.chassisNumber?.message}
          error={!!errors.chassisNumber}
          {...register('chassisNumber', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a chassis number',
                description: 'Error message for chassis number field',
              }),
            },
          })}
        />

        <FormControl>
          <InputLabel id="driver">
            <FormattedMessage
              defaultMessage="Driver"
              description="Driver field label"
            />
          </InputLabel>
          <Select
            labelId="driver"
            label="Driver"
            defaultValue=""
            {...register('driverId', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please select a driver',
                  description: 'Error message for driver field',
                }),
              },
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
          <InputLabel id="owner">
            <FormattedMessage
              defaultMessage="Owner"
              description="Owner field label"
            />
          </InputLabel>
          <Select
            labelId="owner"
            label="Owner"
            defaultValue=""
            {...register('ownerId', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please select an owner',
                  description: 'Error message for owner field',
                }),
              },
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
          <FormattedMessage defaultMessage="Save" description="Save button" />
        </Button>
      </Stack>
    </form>
  )
}

export default VehicleForm
