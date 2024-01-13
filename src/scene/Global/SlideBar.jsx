import { useTheme } from '@emotion/react'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { NavLink } from 'react-router-dom'
import { tokens } from '../../theme'

export default function SlideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Sidebar collapsed={isCollapsed} width='300px' backgroundColor={colors.primary[400]} collapsedWidth='90px'>
      <Box
        sx={{
          padding: `10px 0px 10px ${isCollapsed ? '0px' : '20px'} !important`,
          '& .ps-menu-button:hover': {
            color: '#868dfb !important',
            backgroundColor: 'transparent !important'
          },
          '& .ps-menu-button.active': {
            color: '#6870fa !important'
          },
          '& .ps-menu-icon': {
            marginRight: `${isCollapsed ? '0px' : '10px'}`
          }
        }}
      >
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
          {!isCollapsed && (
            <Typography variant='h3' color={colors.grey[100]}>
              ADMINIS
            </Typography>
          )}
          <IconButton
            size='large'
            onClick={() => setIsCollapsed(!isCollapsed)}
            sx={isCollapsed ? { margin: '0 auto' } : {}}
          >
            <MenuOutlinedIcon fontSize='medium' />
          </IconButton>
        </Box>
        {!isCollapsed && (
          <Stack mt={3} direction='column' justifyContent='space-between' alignItems='center'>
            <Box>
              <Avatar src='./assets/imgs/admin.jpg' alt='Admin' sx={{ width: '100px', height: '100px' }}>
                Admin
              </Avatar>
            </Box>
            <Box mt={2} textAlign='center'>
              <Typography color={colors.primary[100]} fontWeight={600} variant='h3'>
                MinhBuiDev
              </Typography>
              <Typography color={colors.greenAccent[400]} variant='h6'>
                VP Fancy Admin
              </Typography>
            </Box>
          </Stack>
        )}

        <Box mt={3}>
          <Menu style={isCollapsed ? { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } : {}}>
            <Item isCollapsed={isCollapsed} icon={<HomeOutlinedIcon />} to={'/'} text='Dashboard' />
            <Box mx={!isCollapsed ? 1 : 0} textAlign={isCollapsed ? 'center' : 'left'} width='100%'>
              <Typography color={colors.primary[300]}>Data</Typography>
            </Box>
            <Item isCollapsed={isCollapsed} icon={<GroupOutlinedIcon />} to={'/team'} text='Manage Team' />
            <Item
              isCollapsed={isCollapsed}
              icon={<ContactsOutlinedIcon />}
              to={'/contacts'}
              text='Contacts Information'
            />
            <Item isCollapsed={isCollapsed} icon={<ReceiptOutlinedIcon />} to={'/invoices'} text='Invoices Balance' />
            <Box mx={!isCollapsed ? 1 : 0} textAlign={isCollapsed ? 'center' : 'left'}>
              <Typography color={colors.primary[300]}>Pages</Typography>
            </Box>
            <Item isCollapsed={isCollapsed} icon={<Person2OutlinedIcon />} to={'/form'} text='Profile Form' />
            <Item isCollapsed={isCollapsed} icon={<CalendarMonthOutlinedIcon />} to={'/calendar'} text='Calendar' />
            <Item isCollapsed={isCollapsed} icon={<LiveHelpOutlinedIcon />} to={'/faq'} text='FAQ Page' />
            <Box mx={!isCollapsed ? 1 : 0} textAlign={isCollapsed ? 'center' : 'left'}>
              <Typography color={colors.primary[300]}>Charts</Typography>
            </Box>
            <Item isCollapsed={isCollapsed} icon={<BarChartOutlinedIcon />} to={'/bar'} text='Bar Char' />
            <Item isCollapsed={isCollapsed} icon={<PieChartOutlineOutlinedIcon />} to={'/pie'} text='Pie Chart' />
            <Item isCollapsed={isCollapsed} icon={<StackedLineChartOutlinedIcon />} to={'/line'} text='Line Chart' />
            <Item isCollapsed={isCollapsed} icon={<MapOutlinedIcon />} to={'/geography'} text='Geography Chart' />
          </Menu>
        </Box>
      </Box>
    </Sidebar>
  )
}

const Item = ({ to, icon, text, isCollapsed }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <MenuItem component={<NavLink to={to} />} icon={icon} style={{ color: colors.grey[100] }}>
      {!isCollapsed && <Typography>{text}</Typography>}
    </MenuItem>
  )
}
