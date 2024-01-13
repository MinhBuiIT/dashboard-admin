import { useTheme } from '@emotion/react'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import EmailIcon from '@mui/icons-material/Email'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import TrafficIcon from '@mui/icons-material/Traffic'
import { Box, Button, IconButton, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import BarChart from '../../components/BarChart'
import GeoChart from '../../components/GeoChart'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'
import ProcessCircle from '../../components/ProcessCircle/index.jsx'
import StatBox from '../../components/StatBox'
import { mockBarData, mockGeographyData, mockLineData, mockTransactions } from '../../data/MockData.js'
import { tokens } from '../../theme'

export default function Dashboard() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box mt='30px' mx='20px'>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Header title='dashboard' subtitle='Welcome to your dashboard' />
        <Button sx={{ backgroundColor: colors.blueAccent[700], color: '#ffff', padding: '12px 10px' }}>
          <FileDownloadIcon sx={{ mr: '8px', fontSize: '20px', color: colors.primary[100] }} />
          <Typography fontSize='16px' fontWeight='bold' color={colors.primary[100]}>
            DOWNLOAD REPORTS
          </Typography>
        </Button>
      </Box>
      <Grid container spacing={2} mt={2}>
        <Grid xs={3} minHeight='140px'>
          <StatBox
            title='12,361'
            subtitle='Emails Sent'
            icon={<EmailIcon fontSize='large' sx={{ color: colors.greenAccent[600] }} />}
            percent={0.75}
            increase={'14%'}
          />
        </Grid>
        <Grid xs={3} minHeight='140px'>
          <StatBox
            title='431,225'
            subtitle='Sales Obtained'
            icon={<ContactPhoneIcon fontSize='large' sx={{ color: colors.greenAccent[600] }} />}
            percent={0.5}
            increase={'21%'}
          />
        </Grid>
        <Grid xs={3} minHeight='140px'>
          <StatBox
            title='32,441'
            subtitle='New Clients'
            icon={<PersonAddAltIcon fontSize='large' sx={{ color: colors.greenAccent[600] }} />}
            percent={0.25}
            increase={'5%'}
          />
        </Grid>
        <Grid xs={3} minHeight='140px'>
          <StatBox
            title='1,325,134'
            subtitle='Traffic Received'
            icon={<TrafficIcon fontSize='large' sx={{ color: colors.greenAccent[600] }} />}
            percent={0.75}
            increase={'43%'}
          />
        </Grid>

        <Grid xs={8} minHeight='140px'>
          <Box width='100%' padding='12px 18px' backgroundColor={colors.primary[400]}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Box>
                <Typography color={colors.primary[100]} variant='h5' fontWeight={'bold'}>
                  Revenue Generated
                </Typography>
                <Typography mt={1} color={colors.greenAccent[500]} variant='h3' fontWeight={'bold'}>
                  $59,342.32
                </Typography>
              </Box>
              <IconButton>
                <FileDownloadIcon sx={{ color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
            <Box height='250px'>
              <LineChart data={mockLineData} isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        <Grid xs={4} overflow='auto' height='335px'>
          <Box bgcolor={colors.primary[400]} padding='12px' borderBottom={`4px solid ${colors.primary[500]}`}>
            <Typography color={colors.primary[100]} variant='h5' fontWeight='bold'>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((item, index) => {
            return (
              <Box
                key={item.txId + index}
                bgcolor={colors.primary[400]}
                padding='12px'
                borderBottom={`4px solid ${colors.primary[500]}`}
                display='flex'
                alignItems='center'
                justifyContent='space-between'
              >
                <Box>
                  <Typography color={colors.greenAccent[600]}>{item.txId}</Typography>
                  <Typography color={colors.primary[100]}>{item.user}</Typography>
                </Box>
                <Box>
                  <Typography color={colors.primary[100]}>{item.date}</Typography>
                </Box>
                <Button variant='contained' color='secondary' sx={{ color: '#fff' }}>
                  {'$' + item.cost}
                </Button>
              </Box>
            )
          })}
        </Grid>
        <Grid xs={4} height={'200px'}>
          <Box width='100%' bgcolor={colors.primary[400]} padding='24px 20px'>
            <Typography color={colors.primary[100]} variant='h5' fontWeight={'bold'}>
              Campaign
            </Typography>
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' mt={2}>
              <ProcessCircle process={0.75} size='120' />
              <Box mt={2} textAlign={'center'}>
                <Typography color={colors.greenAccent[500]} variant='h6'>
                  $48,352 revenue generated
                </Typography>
                <Typography color={colors.primary[100]}>Includes extra misc expenditures and costs</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box width='100%' bgcolor={colors.primary[400]} padding='24px 20px'>
            <Typography color={colors.primary[100]} variant='h5' fontWeight={'bold'}>
              Sales Quantity
            </Typography>
            <Box height={'195px'}>
              <BarChart data={mockBarData} isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box width='100%' bgcolor={colors.primary[400]} padding='24px 20px'>
            <Typography color={colors.primary[100]} variant='h5' fontWeight={'bold'}>
              Geography Based Traffic
            </Typography>
            <Box height={'188px'} mt={1}>
              <GeoChart data={mockGeographyData} isDashboard={true} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
