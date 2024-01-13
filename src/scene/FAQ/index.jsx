import { useTheme } from '@emotion/react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import { tokens } from '../../theme'

export default function FAQ() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box mt={'30px'} mx={'20px'}>
      <Header title='faq' subtitle='Frequently Asked Questions Page' />

      <Box mt={4}>
        <Accordion defaultExpanded='true'>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
            <Typography color={colors.greenAccent[600]} variant='h5'>
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded='true'>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
            <Typography color={colors.greenAccent[600]} variant='h5'>
              Another Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded='true'>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
            <Typography color={colors.greenAccent[600]} variant='h5'>
              Your Favorite Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded='true'>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
            <Typography color={colors.greenAccent[600]} variant='h5'>
              Some Random Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded='true'>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
            <Typography color={colors.greenAccent[600]} variant='h5'>
              The Final Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}
