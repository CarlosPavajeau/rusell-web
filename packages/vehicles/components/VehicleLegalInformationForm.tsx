import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateVehicleLegalInformationRequest } from '../models'

type Props = {
  onSubmit: (legalInformation: CreateVehicleLegalInformationRequest) => void
}

const VehicleLegalInformationForm = (props: Props) => {
  const { onSubmit } = props
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateVehicleLegalInformationRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
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

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label={
              <FormattedMessage
                defaultMessage="Due date"
                description="Due date field"
              />
            }
            value={watch('dueDate')}
            {...register('dueDate', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please select a due date',
                  description: 'Error message for due date field',
                }),
              },
            })}
            onChange={date => {
              if (date) {
                setValue('dueDate', date)
              }
            }}
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label={
              <FormattedMessage
                defaultMessage="Renovation date"
                description="Renovation date field"
              />
            }
            value={watch('renovationDate')}
            {...register('renovationDate', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please select a renovation date',
                  description: 'Error message for renovation date field',
                }),
              },
            })}
            onChange={date => {
              if (date) {
                setValue('renovationDate', date)
              }
            }}
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>

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

export default VehicleLegalInformationForm
