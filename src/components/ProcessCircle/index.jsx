import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme'

export default function ProcessCircle({ process = 0.75, size = 40 }) {
  const radio = process * 360
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%,transparent 56%), conic-gradient(${colors.greenAccent[500]} 0deg ${radio}deg, transparent ${radio}deg 360deg), ${colors.blueAccent[500]}`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%'
      }}
    ></Box>
  )
}
