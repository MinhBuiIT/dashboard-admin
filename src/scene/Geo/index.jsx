import { Box } from '@mui/material'
import React from 'react'
import GeoChart from '../../components/GeoChart'
import Header from '../../components/Header'
import { mockGeographyData as data } from '../../data/MockData.js'

export default function Geo() {
  return (
    <Box mt='30px' mx='20px'>
      <Header title='Geography' subtitle='Simple Geography Chart' />
      <Box height='75vh' mt={3} border='1px solid #fff'>
        <GeoChart data={data} />
      </Box>
    </Box>
  )
}
