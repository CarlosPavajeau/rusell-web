import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useContext } from 'react'
import { FormattedMessage } from 'react-intl'

import ThemeContext from '../../../theme/ThemeContext'

const ToggleThemeButton = () => {
  const { mode, toggleTheme } = useContext(ThemeContext)

  const handleClick = () => {
    toggleTheme(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <Tooltip
      title={
        mode === 'dark' ? (
          <FormattedMessage defaultMessage="Toggle to light theme" />
        ) : (
          <FormattedMessage defaultMessage="Toggle to dark theme" />
        )
      }
    >
      <IconButton onClick={handleClick}>
        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default ToggleThemeButton
