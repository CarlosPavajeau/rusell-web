import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'

import type { Company } from '../models'

type Props = {
  company: Company
}

export const CompanyCard = (props: Props) => {
  const { company } = props
  return (
    <Card elevation={3} sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack>
          <Typography variant="h3" sx={{ mb: 1.5 }}>
            {company.name}
          </Typography>
        </Stack>
        <Chip label={`Nit: ${company.nit}`} sx={{ mb: 1.5 }} />
        <Typography variant="subtitle2" sx={{ display: 'block' }}>
          {company.info}
        </Typography>
      </CardContent>
    </Card>
  )
}
