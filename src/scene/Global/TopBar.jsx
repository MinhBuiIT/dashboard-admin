import { useTheme } from '@emotion/react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import SearchIcon from '@mui/icons-material/Search'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { Box, IconButton, InputBase } from '@mui/material'
import React, { useContext } from 'react'
import { ContextTheme, tokens } from '../../theme'

export default function TopBar() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const context = useContext(ContextTheme)
  return (
    <Box display='flex' alignItems='center' justifyContent='space-between' p={2}>
      <Box bgcolor={colors.primary[400]}>
        <InputBase type='text' placeholder='Search' sx={{ padding: '6px 10px' }} />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display='flex'>
        <IconButton onClick={context.toggleTheme}>
          {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
