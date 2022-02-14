import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateEmployeeRequest, EmployeeType } from '../models'

type Props = {
  onSubmit: (employee: CreateEmployeeRequest) => void
}

const EmployeeForm = (props: Props) => {
  const { onSubmit } = props
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEmployeeRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextField
          label={
            <FormattedMessage defaultMessage="Id" description="Id field" />
          }
          helperText={errors.id?.message}
          error={!!errors.id}
          {...register('id', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter an id',
                description: 'Error message for id field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="First name"
              description="First name field"
            />
          }
          helperText={errors.firstName?.message}
          error={!!errors.firstName}
          {...register('firstName', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a first name',
                description: 'Error message for first name field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Middle name"
              description="Middle name field"
            />
          }
          {...register('middleName')}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="First surname"
              description="First surname field"
            />
          }
          helperText={errors.firstSurname?.message}
          error={!!errors.firstSurname}
          {...register('firstSurname', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a first surname',
                description: 'Error message for first surname field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Second surname"
              description="Second surname field"
            />
          }
          {...register('secondSurname')}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Email"
              description="Email field"
            />
          }
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter an email',
                description: 'Error message for email field',
              }),
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a valid email',
                description: 'Error message for email field',
              }),
            },
          })}
        />

        <TextField
          label={
            <FormattedMessage
              defaultMessage="Phone number"
              description="Phone number field"
            />
          }
          helperText={errors.phoneNumber?.message}
          error={!!errors.phoneNumber}
          {...register('phoneNumber', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a phone number',
                description: 'Error message for phone number field',
              }),
            },
            pattern: {
              value: /^\+?[0-9]{10,15}$/i,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a valid phone number',
                description: 'Error message for phone number field',
              }),
            },
          })}
        />

        <FormControl>
          <InputLabel id="employee-type">
            <FormattedMessage
              defaultMessage="Employee type"
              description="Employee type field"
            />
          </InputLabel>
          <Select
            labelId="employee-type"
            label="Employee type"
            {...register('type', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please select an employee type',
                  description: 'Error message for employee type field',
                }),
              },
            })}
          >
            <MenuItem value={EmployeeType.Dispatcher}>Dispatcher</MenuItem>
            <MenuItem value={EmployeeType.Driver}>Driver</MenuItem>
            <MenuItem value={EmployeeType.Other}>Other</MenuItem>
          </Select>
          <FormHelperText>{errors.type?.message}</FormHelperText>
        </FormControl>

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

export default EmployeeForm
