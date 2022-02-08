import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { Addresses } from 'addresses/models'
import { useForm } from 'react-hook-form'

import { CreateRouteRequest } from '../models'

type Props = {
  onSubmit: (route: CreateRouteRequest) => void
  addresses: Addresses
}

const RouteForm = (props: Props) => {
  const { onSubmit, addresses } = props
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateRouteRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl>
          <InputLabel id="from">From</InputLabel>
          <Select
            labelId="from"
            label="From"
            defaultValue=""
            {...register('from', {
              required: { value: true, message: 'From is required' },
            })}
          >
            {addresses
              .filter(address => address.id !== watch('to'))
              .map(address => (
                <MenuItem key={address.id} value={address.id}>
                  {address.country}, {address.state}, {address.city}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="to">To</InputLabel>
          <Select
            labelId="to"
            label="To"
            defaultValue=""
            {...register('to', {
              required: { value: true, message: 'To is required' },
            })}
          >
            {addresses
              .filter(address => address.id !== watch('from'))
              .map(address => (
                <MenuItem key={address.id} value={address.id}>
                  {address.country}, {address.state}, {address.city}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <TextField
          label="Cost"
          type="number"
          helperText={errors.cost?.message}
          error={!!errors.cost}
          {...register('cost', {
            required: { value: true, message: 'Cost is required' },
          })}
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...register('isCustomerPickedUpAtHome')} />}
            label="Is customer picked up at home?"
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...register('isCustomerDroppedOffAtHome')} />}
            label="Is customer dropped off at home?"
          />
        </FormGroup>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: 'fit-content' }}
        >
          Register route
        </Button>
      </Stack>
    </form>
  )
}

export default RouteForm
