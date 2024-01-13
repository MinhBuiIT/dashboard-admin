import { useTheme } from '@emotion/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { tokens } from '../../theme'

export default function Calendar() {
  const [currentEvent, setCurrentEvent] = useState([])
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const hanldSelectDate = (selectInfo) => {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selectInfo.view.calendar
    calendarApi.unselect()
    if (title) {
      calendarApi.addEvent({
        id: title + selectInfo.startStr,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }
  const handleSelectEvent = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete the event ' + clickInfo.event.title)) {
      clickInfo.event.remove()
    }
  }
  return (
    <Box mt={'30px'} mx={'20px'}>
      <Header title='Calendar' subtitle={'Full Calendar Interactive Page'} />
      <Box mt={4} display='flex' justifyContent='space-between' gap={2}>
        <Box width='18%' flexShrink={0}>
          <List sx={{ backgroundColor: colors.primary[400], padding: '10px 8px' }}>
            <Typography variant='h5'>Events</Typography>
            {currentEvent.map((event) => {
              return (
                <ListItem
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    marginTop: '12px'
                  }}
                  key={event.id}
                >
                  <ListItemText>
                    <Typography>{event.title}</Typography>
                    <Typography>
                      {formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}
                    </Typography>
                  </ListItemText>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box width='82%'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev, next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            select={hanldSelectDate}
            eventClick={handleSelectEvent}
            eventsSet={(events) => setCurrentEvent(events)}
          />
        </Box>
      </Box>
    </Box>
  )
}
