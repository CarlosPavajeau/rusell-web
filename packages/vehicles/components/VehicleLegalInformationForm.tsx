import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'

import { CreateVehicleLegalInformationRequest } from '../models'

type Props = {
  onSubmit: (legalInformation: CreateVehicleLegalInformationRequest) => void
}

const VehicleLegalInformationForm = (props: Props) => {
  const { onSubmit } = props
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
          label="Type"
          helperText={errors.type?.message}
          error={!!errors.type}
          {...register('type', {
            required: { value: true, message: 'Type is required' },
          })}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Due date"
            value={watch('dueDate')}
            {...register('dueDate', {
              required: { value: true, message: 'Due date is required' },
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
            label="Renovation date"
            value={watch('renovationDate')}
            {...register('renovationDate', {
              required: { value: true, message: 'Renovation date is required' },
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
          Register vehicle legal information
        </Button>
      </Stack>
    </form>
  )
}

export default VehicleLegalInformationForm
