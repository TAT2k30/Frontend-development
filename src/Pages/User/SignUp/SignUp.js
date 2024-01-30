import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './SignUp.scss';
function Register() {
  const formik = useFormik({
    initialValues: {
      email: '',
      gender: '',
      dateOfBirth: '',
      userName: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      gender: Yup.string().required('Gender is required'),
      dateOfBirth: Yup.date().required('Date of Birth is required'),
      userName: Yup.string().required('Username is required'),
      password: Yup.string()
        .min(8, 'Your password must be at least 8 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Perform your registration logic using axios or any other method
        // Example:
        // const response = await axios.post('YOUR_REGISTRATION_API_ENDPOINT', values);
        // Handle success or display appropriate messages
        console.log('Registration successful!');
      } catch (error) {
        // Handle registration failure
        console.error('Registration failed:', error);
      }
    },
  });

  return (
    <div className='signup-form'>
       <Container className="mt-5 registration-container">
     
     <Form onSubmit={formik.handleSubmit}>
       <Form.Group controlId="formEmail" className="form-group">
         <Form.Label>Email</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter email"
           name="email"
           value={formik.values.email}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           isInvalid={formik.touched.email && formik.errors.email}
           required
         />
         <Form.Control.Feedback type="invalid" className="invalid-feedback">
           {formik.errors.email}
         </Form.Control.Feedback>
       </Form.Group>


       <Form.Group controlId="formGender"  className="form-group">
         <Form.Label>Gender</Form.Label>
         <Form.Control
           as="select"
           name="gender"
           value={formik.values.gender}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           isInvalid={formik.touched.gender && formik.errors.gender}
           required
         >
           <option value="">Select Gender</option>
           <option value="male">Male</option>
           <option value="female">Female</option>
         </Form.Control>
         <Form.Control.Feedback type="invalid" className="invalid-feedback">{formik.errors.gender}</Form.Control.Feedback>
       </Form.Group>

       <Form.Group controlId="formDateOfBirth"  className="form-group" >
         <Form.Label>Date of Birth</Form.Label>
         <Form.Control
           type="date"
           name="dateOfBirth"
           value={formik.values.dateOfBirth}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           isInvalid={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
           required
         />
         <Form.Control.Feedback type="invalid" className="invalid-feedback">{formik.errors.dateOfBirth}</Form.Control.Feedback>
       </Form.Group>

       <Form.Group controlId="formUserName"  className="form-group">
         <Form.Label>Username</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter username"
           name="userName"
           value={formik.values.userName}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           isInvalid={formik.touched.userName && formik.errors.userName}
           required
         />
         <Form.Control.Feedback type="invalid" className="invalid-feedback">{formik.errors.userName}</Form.Control.Feedback>
       </Form.Group>

       <Form.Group controlId="formPassword"  className="form-group">
         <Form.Label>Password</Form.Label>
         <Form.Control
           type="password"
           placeholder="Enter password"
           name="password"
           value={formik.values.password}
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           isInvalid={formik.touched.password && formik.errors.password}
           required
         />
         <Form.Control.Feedback type="invalid" className="invalid-feedback">{formik.errors.password}</Form.Control.Feedback>
       </Form.Group>

       <Button className="btn-register" variant="primary" type="submit">
         Register
       </Button>
     </Form>
   </Container>
    </div>
  );
}

export default Register;
