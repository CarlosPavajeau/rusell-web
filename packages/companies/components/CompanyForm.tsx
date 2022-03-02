import { Button, Input, Spacer } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CreateCompanyRequest } from '../models'

type Props = {
  onSubmit: (company: CreateCompanyRequest) => void
}
export const CompanyForm = (props: Props) => {
  const { onSubmit } = props
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateCompanyRequest>({
    defaultValues: {
      nit: undefined,
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        labelPlaceholder={intl.formatMessage({
          defaultMessage: 'Name',
          description: 'Name field',
        })}
        helperText={errors?.name?.message}
        helperColor="error"
        status={errors?.name ? 'error' : 'default'}
        size="lg"
        width="100%"
        {...register('name', {
          required: {
            value: true,
            message: intl.formatMessage({
              defaultMessage: 'Please enter a name',
              description: 'Error message for name field',
            }),
          },
        })}
      />

      <Spacer y={1.5} />

      <Input
        labelPlaceholder={intl.formatMessage({
          defaultMessage: 'Nit',
          description: 'Nit field',
        })}
        size="lg"
        width="100%"
        {...register('nit')}
      />

      <Spacer y={1.5} />

      <Input
        labelPlaceholder={intl.formatMessage({
          defaultMessage: 'Info',
          description: 'Info field',
        })}
        size="lg"
        width="100%"
        helperText={errors?.info?.message}
        helperColor="error"
        status={errors?.info ? 'error' : 'default'}
        {...register('info', {
          required: {
            value: true,
            message: intl.formatMessage({
              defaultMessage: 'Please enter an info',
              description: 'Error message for info field',
            }),
          },
        })}
      />

      <Spacer y={2} />

      <Button
        type="submit"
        color="primary"
        disabled={isSubmitting}
        size="lg"
        shadow
        rounded
      >
        <FormattedMessage defaultMessage="Submit" description="Submit button" />
      </Button>
    </form>
  )
}
