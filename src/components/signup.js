import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Signup() { 

  const formik = useFormik({
      initialValues:{
        name: "",
        surname: "",
        birthdate: "",
        email: "",
        phone: "",
        gender:"",
        vaccinated:""
      },
      validationSchema: Yup.object({
        name:Yup.string()
          .max(12, "Should be 12 letters or less")
          .required("Required"),
        surname:Yup.string()
          .max(15, "Should be 15 letters or less")
          .required("Required"),
        birthdate:Yup.date()
          .required("Required"),
        email:Yup.string()
          .email("Not correct email adrress"),
          // .required("Required"),
        phone:Yup.number("phone number must be a number")
          .required("Required")
      }),
      onSubmit:(values) => {
        console.log(values)
      }
  })

  return (
    
    <form onSubmit={formik.handleSubmit}>
      <div className='form-name-surname'> 
        <div className="input-container"> 
            <TextField 
                id='name'
                name='name'
                type="text"
                placeholder='Name'
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
            />
          {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
        </div>
        <div className="input-container">
            <TextField 
                id='surname'
                name='surname'
                type="text"
                placeholder='Surname'
                onChange={formik.handleChange}
                value={formik.values.surname}
                onBlur={formik.handleBlur} 
            />
          {formik.touched.surname && formik.errors.surname ? <p>{formik.errors.surname}</p> : null}
        </div>
      </div>
    
      <div className='form-email-phone'>
        <div className="input-container">
            <TextField 
                id='email'
                name='email'
                type="email"
                placeholder='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur} 
            />
          {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
        </div>
        <div className="input-container">
            <TextField 
                id='phone'
                name='phone'
                type="tel"
                placeholder='Phone Number'
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur} 
            />
          {formik.touched.phone && formik.errors.phone ? <p>{formik.errors.phone}</p> : null}
        </div>
      </div>
      <div className='radio-gender-btn'>
        <h4>Gender:</h4>
        <RadioGroup
          row
          aria-labelledby="gender-radio-btn"
          name="radio-buttons-group"
          onChange={formik.handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </div>
      <div className='form-birthdate'>
        <h4>Birthdate:</h4>  
        <div className="input-container">
            <TextField
                id='birthdate'
                name='birthdate'
                type="date"
                placeholder='Birthdate'
                onChange={formik.handleChange}
                value={formik.values.birthdate}
                onBlur={formik.handleBlur} 
            />
          {formik.touched.birthdate && formik.errors.birthdate ? <p>{formik.errors.birthdate}</p> : null}
        </div>
      </div>
      <div className='form-vaccinated'>
        <h4>Vaccinated:</h4> 
        <FormControlLabel control={<Checkbox />} label="Yes" />
        <FormControlLabel control={<Checkbox />} label="No" />
      </div>
        <Button variant='contained' type='submit'>Submit</Button>
    </form>
  )
}

