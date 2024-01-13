import { Box, Button, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import Header from '../../components/Header'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contactNumber: '',
  address1: '',
  address2: ''
}

const regexPhone = /^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
const schemaProfile = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().required('Email is required').email('Email is not valid'),
  contactNumber: yup.string().required('Phone is required').matches(regexPhone, 'Phone is not valid'),
  address1: yup.string().required('Address 1 is required'),
  address2: yup.string()
})
export default function ProfileForm() {
  const formik = useFormik({
    initialValues,
    validationSchema: schemaProfile,
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <Box mx='20px' mt='30px'>
      <Header title='create user' subtitle='Create a new user profile' />
      <form style={{ marginTop: '12px', width: '100%' }} onSubmit={formik.handleSubmit}>
        <Grid container={true} spacing={2} rowSpacing={4}>
          <Grid md={6} xs={12}>
            <TextField
              type='text'
              fullWidth
              label='First Name'
              variant='filled'
              name='firstName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={formik.touched.firstName && !!formik.errors.firstName}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid md={6} xs={12}>
            <TextField
              type='text'
              fullWidth
              label='Last Name'
              variant='filled'
              name='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && !!formik.errors.lastName}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              type='text'
              fullWidth
              label='Email'
              variant='filled'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              type='text'
              fullWidth
              label='Contact Number'
              variant='filled'
              name='contactNumber'
              value={formik.values.contactNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.contactNumber && !!formik.errors.contactNumber}
              helperText={formik.touched.contactNumber && formik.errors.contactNumber}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              type='text'
              fullWidth
              label='Address 1'
              variant='filled'
              name='address1'
              value={formik.values.address1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address1 && !!formik.errors.address1}
              helperText={formik.touched.address1 && formik.errors.address1}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              type='text'
              fullWidth
              label='Address 2'
              variant='filled'
              name='address2'
              value={formik.values.address2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address2 && !!formik.errors.address2}
              helperText={formik.touched.address2 && formik.errors.address2}
            />
          </Grid>
        </Grid>
        <Box display='flex' justifyContent='end' mt={2}>
          <Button variant='contained' color='success' type='submit'>
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  )
}
