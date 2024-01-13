import { useTheme } from '@emotion/react'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined'
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import { Box, Button, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import Header from '../../components/Header'
import { mockDataTeam } from '../../data/MockData.js'
import { tokens } from '../../theme'

export default function Team() {
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
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: (params) => {
        return (
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width='60%'>
            <Button
              variant='contained'
              fullWidth
              sx={{
                color: colors.grey[100],
                backgroundColor: params.value === 'admin' ? 'secondary.main' : 'secondary.dark',
                '&:hover': {
                  backgroundColor: params.value === 'admin' ? 'secondary.main' : 'secondary.dark'
                }
              }}
            >
              {params.value === 'admin' && <AdminPanelSettingsOutlinedIcon />}
              {params.value === 'manager' && <ManageAccountsOutlinedIcon />}
              {params.value === 'user' && <LockPersonOutlinedIcon />}
              <Typography variant='body1' textTransform='lowercase' ml='6px' color={colors.grey[100]}>
                {params.value}
              </Typography>
            </Button>
          </Box>
        )
      }
    }
  ]
  return (
    <Box mt='30px' mx='20px'>
      <Header title='Team' subtitle='Managing the Team Members' />
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
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  )
}
