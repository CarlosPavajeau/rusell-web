import { Theme } from '@mui/material/styles'
import { merge } from 'lodash'

import Button from './Button'
import Chip from './Chip'
import Fab from './Fab'

export default function ComponentsOverrides(theme: Theme): unknown {
  return merge(Button(theme), Fab(), Chip())
}
