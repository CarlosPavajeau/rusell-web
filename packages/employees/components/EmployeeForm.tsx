import { Button, Grid, Input, Radio, Spacer, Text } from '@nextui-org/react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateEmployeeRequest, EmployeeType } from '../models'

type Props = {
  onSubmit: (employee: CreateEmployeeRequest) => void
}

const EmployeeForm: FC<Props> = ({ onSubmit }) => {
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateEmployeeRequest>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Id',
              description: 'Id field',
            })}
            helperText={errors.id?.message}
            helperColor="error"
            status={errors.id ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'First name',
              description: 'First name field',
            })}
            helperText={errors.firstName?.message}
            helperColor="error"
            status={errors.firstName ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Middle name',
              description: 'Middle name field',
            })}
            width="100%"
            {...register('middleName')}
          />
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'First surname',
              description: 'First surname field',
            })}
            helperText={errors.firstSurname?.message}
            helperColor="error"
            status={errors.firstSurname ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Second surname',
              description: 'Second surname field',
            })}
            width="100%"
            {...register('secondSurname')}
          />
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Email',
              description: 'Email field',
            })}
            helperText={errors.email?.message}
            helperColor="error"
            status={errors.email ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Grid xs={12} md={6}>
          <Input
            label={intl.formatMessage({
              defaultMessage: 'Phone number',
              description: 'Phone number field',
            })}
            helperText={errors.phoneNumber?.message}
            helperColor="error"
            status={errors.phoneNumber ? 'error' : 'default'}
            width="100%"
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
        </Grid>

        <Spacer y={1} />
        <Grid xs={12}>
          <Text>
            <FormattedMessage
              defaultMessage="Employee type"
              description="Employee type field"
            />
          </Text>
          <Spacer y={0.5} />
          <Radio.Group onChange={e => setValue('type', e as EmployeeType)} row>
            <Radio value={EmployeeType.Driver} size="sm">
              {intl.formatMessage({
                defaultMessage: 'Driver',
              })}
            </Radio>
            <Radio value={EmployeeType.Dispatcher} size="sm">
              {intl.formatMessage({
                defaultMessage: 'Dispatcher',
              })}
            </Radio>
            <Radio value={EmployeeType.Other} size="sm">
              {intl.formatMessage({
                defaultMessage: 'Other',
              })}
            </Radio>
          </Radio.Group>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />

      <Button
        type="submit"
        color="primary"
        disabled={isSubmitting}
        size="lg"
        shadow
        rounded
      >
        <FormattedMessage defaultMessage="Create" description="Create button" />
      </Button>
    </form>
  )
}

export default EmployeeForm
