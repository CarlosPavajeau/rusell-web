import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Button, Checkbox, Grid, Input, Spacer } from '@nextui-org/react'
import { Addresses } from '@rusell/addresses/models'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateRouteRequest } from '../models'

type Props = {
  onSubmit: (route: CreateRouteRequest) => void
  addresses: Addresses
}

const RouteForm: FC<Props> = ({ onSubmit, addresses }) => {
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateRouteRequest>({
    defaultValues: {
      isCustomerDroppedOffAtHome: false,
      isCustomerPickedUpAtHome: false,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid.Container gap={2}>
        <Grid xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="from">
              <FormattedMessage
                defaultMessage="From"
                description="From field"
              />
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
        </Grid>

        <Grid xs={12} md={6}>
          <FormControl fullWidth>
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
        </Grid>

        <Grid xs={12}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Cost',
              description: 'Cost field',
            })}
            helperText={errors?.cost?.message}
            helperColor="error"
            status={errors.cost ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Checkbox
            {...register('isCustomerPickedUpAtHome')}
            onChange={e =>
              setValue('isCustomerPickedUpAtHome', e.target.checked)
            }
          >
            <FormattedMessage
              defaultMessage="Is customer picked up at home?"
              description="Customer picked up at home checkbox"
            />
          </Checkbox>
        </Grid>

        <Grid xs={12} md={6}>
          <Checkbox
            {...register('isCustomerDroppedOffAtHome')}
            onChange={e =>
              setValue('isCustomerDroppedOffAtHome', e.target.checked)
            }
          >
            <FormattedMessage
              defaultMessage="Is customer dropped off at home?"
              description="Customer dropped off at home checkbox"
            />
          </Checkbox>
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
        <FormattedMessage defaultMessage="Create" description="Create button" />
      </Button>
    </form>
  )
}

export default RouteForm
