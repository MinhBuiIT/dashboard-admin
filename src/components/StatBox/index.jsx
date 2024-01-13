import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme'
import ProcessCircle from '../ProcessCircle'

export default function StatBox({ icon, title, subtitle, percent, increase }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box
      bgcolor={colors.primary[400]}
      padding='12px 18px'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box>
        {icon}
        <Typography color={colors.primary[100]} fontWeight='bold' variant='h4'>
          {title}
        </Typography>
        <Typography color={colors.greenAccent[600]} variant='h5' mt={1}>
          {subtitle}
        </Typography>
      </Box>
      <Box>
        <ProcessCircle process={percent} />
        <Typography color={colors.greenAccent[600]} fontStyle='italic' variant='h5' mt={2}>
          {increase}
        </Typography>
      </Box>
    </Box>
  )
}
