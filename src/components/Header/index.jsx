import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme'

export default function Header({ title, subtitle }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box>
      <Typography
        variant='h2'
        color={colors.primary[100]}
        fontWeight='600'
        sx={{
          textTransform: 'uppercase'
        }}
      >
        {title}
      </Typography>
      <Typography variant='h5' color={colors.greenAccent[500]}>
        {subtitle}
      </Typography>
    </Box>
  )
}
