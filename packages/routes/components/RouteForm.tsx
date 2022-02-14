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
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateRouteRequest } from '../models'

type Props = {
  onSubmit: (route: CreateRouteRequest) => void
  addresses: Addresses
}

const RouteForm = (props: Props) => {
  const { onSubmit, addresses } = props
  const intl = useIntl()
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
          <InputLabel id="from">
            <FormattedMessage defaultMessage="From" description="From field" />
          </InputLabel>
          <Select
            labelId="from"
            label="From"
            defaultValue=""
            {...register('from', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please select a starting point',
                  description: 'Error message for from field',
                }),
              },
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
          <InputLabel id="to">
            <FormattedMessage defaultMessage="To" description="To field" />
          </InputLabel>
          <Select
            labelId="to"
            label="To"
            defaultValue=""
            {...register('to', {
              required: {
                value: true,
                message: intl.formatMessage({
                  defaultMessage: 'Please select an ending point',
                  description: 'Error message for to field',
                }),
              },
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
          label={
            <FormattedMessage defaultMessage="Cost" description="Cost field" />
          }
          type="number"
          helperText={errors.cost?.message}
          error={!!errors.cost}
          {...register('cost', {
            required: {
              value: true,
              message: intl.formatMessage({
                defaultMessage: 'Please enter a cost',
                description: 'Error message for cost field',
              }),
            },
          })}
        />

        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...register('isCustomerPickedUpAtHome')} />}
            label={
              <FormattedMessage
                defaultMessage="Is customer picked up at home?"
                description="Customer picked up at home checkbox"
              />
            }
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...register('isCustomerDroppedOffAtHome')} />}
            label={
              <FormattedMessage
                defaultMessage="Is customer dropped off at home?"
                description="Customer dropped off at home checkbox"
              />
            }
          />
        </FormGroup>

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

export default RouteForm
