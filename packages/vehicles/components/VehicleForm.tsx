import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Button, Grid, Input, Spacer } from '@nextui-org/react'
import { Employees } from '@rusell/employees/models'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateVehicleRequest } from '../models'

type Props = {
  onSubmit: (vehicle: CreateVehicleRequest) => void
  drivers: Employees
  others: Employees
}

const VehicleForm: FC<Props> = ({ onSubmit, drivers, others }) => {
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateVehicleRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'License plate',
              description: 'License plate field',
            })}
            helperText={errors.licensePlate?.message}
            helperColor="error"
            status={errors.licensePlate ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Internal number',
              description: 'Internal number field',
            })}
            helperText={errors.internalNumber?.message}
            helperColor="error"
            status={errors.internalNumber ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Property card number',
              description: 'Property card number field',
            })}
            helperText={errors.propertyCard?.message}
            helperColor="error"
            status={errors.propertyCard ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Type',
              description: 'Type field',
            })}
            helperText={errors.type?.message}
            helperColor="error"
            status={errors.type ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Mark',
              description: 'Mark field',
            })}
            helperText={errors.mark?.message}
            helperColor="error"
            status={errors.mark ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Model',
              description: 'Model field',
            })}
            helperText={errors.model?.message}
            helperColor="error"
            status={errors.model ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Model number',
              description: 'Model number field',
            })}
            helperText={errors.type?.message}
            helperColor="error"
            status={errors.type ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Color',
              description: 'Color field',
            })}
            helperText={errors.color?.message}
            helperColor="error"
            status={errors.color ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Chairs',
              description: 'Chairs field',
            })}
            helperText={errors.chairs?.message}
            helperColor="error"
            status={errors.chairs ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Engine number',
              description: 'Engine number field',
            })}
            helperText={errors.engineNumber?.message}
            helperColor="error"
            status={errors.engineNumber ? 'error' : 'default'}
            width="100%"
            {...register('engineNumber', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please enter a engine number',
                  description: 'Error message for engine number field',
                }),
              },
            })}
          />
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Chassis number',
              description: 'Chassis number field',
            })}
            helperText={errors.chassisNumber?.message}
            helperColor="error"
            status={errors.chassisNumber ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <FormControl fullWidth>
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
        </Grid>

        <Grid xs={12} md={6}>
          <FormControl fullWidth>
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
        <FormattedMessage defaultMessage="Save" description="Save button" />
      </Button>
    </form>
  )
}

export default VehicleForm
