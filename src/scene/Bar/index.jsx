import { Box } from '@mui/material'
import React from 'react'
import BarChart from '../../components/BarChart'
import Header from '../../components/Header'
import { mockBarData as data } from '../../data/MockData.js'

export default function Bar() {
  return (
    <Box mt={'30px'} mx={'20px'}>
      <Header title='bar chart' subtitle='Simple Bar Chart' />
      <Box mt={2} width={'100%'} height={'70vh'}>
        <BarChart data={data} />
      </Box>
    </Box>
  )
}
