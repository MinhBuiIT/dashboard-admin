import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import Header from '../../components/Header'
import { mockDataContacts } from '../../data/MockData.js'
import { tokens } from '../../theme'

export default function Contacts() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.5
    },
    {
      field: 'registrarId',
      headerName: 'Registrar ID'
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
      field: 'age',
      headerName: 'Age',
      type: 'number',
      cellClassName: 'style-theme--cell',
      headerAlign: 'left',
      align: 'left'
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
      field: 'address',
      headerName: 'Address',
      flex: 1
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      flex: 1
    }
  ]
  return (
    <Box mt='30px' mx='20px'>
      <Header title='contacts' subtitle='List of Contacts for Future Reference' />
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
          },
          '& .MuiButtonBase-root': {
            color: colors.primary[100] + ' !important'
          }
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} slots={{ toolbar: GridToolbar }} />
      </Box>
    </Box>
  )
}
