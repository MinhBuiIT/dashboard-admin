import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'
import { mockLineData as data } from '../../data/MockData.js'

export default function Line() {
  return (
    <Box mt='30px' mx='20px'>
      <Header title='line chart' subtitle='Simple Line Chart' />
      <Box height='75vh'>
        <LineChart data={data} />
      </Box>
    </Box>
  )
}
