import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import Header from '../../components/Header'
import { mockDataInvoices } from '../../data/MockData.js'
import { tokens } from '../../theme'

export default function Invoices() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
    {
      field: 'id',
      headerName: 'ID'
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: (params) => {
        return <Typography color={colors.greenAccent[500]}>{params.value}</Typography>
      }
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1
    }
  ]
  return (
    <Box mt='30px' mx='20px'>
      <Header title='INVOICES' subtitle='List of Invoice Balances' />
      <Box
        width='100%'
        height='500px'
        mt={2}
        sx={{
          '& .style-theme--cell': {
            // textAlign: 'left'
          },
          '& .MuiDataGrid-withBorderColor': {
            borderColor: 'transparent !important'
          },
          '& .MuiDataGrid-columnHeaders': {
            background: colors.blueAccent[600]
          },
          '& .MuiDataGrid-footerContainer': {
            background: colors.blueAccent[600]
          },
          '& .MuiDataGrid-virtualScrollerRenderZone': {
            backgroundColor: colors.primary[400]
          },
          '& .MuiCheckbox-root': {
            color: colors.greenAccent[400]
          },
          '& .Mui-checked': {
            color: colors.greenAccent[400] + ' !important'
          }
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  )
}
