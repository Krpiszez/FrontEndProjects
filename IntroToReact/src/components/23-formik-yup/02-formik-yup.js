import { useFormik } from 'formik'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import * as Yup from 'yup'
import axios from 'axios'

const FormikYup2 = () => {

    const initialValues = {
        firstName:"",
        lastName:"",
        email:"",
        password:""
    }

    const validationSchema = Yup.object({
        firstName: Yup
                    .string()
                    .min(2, "Name can not be less than 2 chars!")
                    .required("First name can not be empty!"),
        lastName: Yup
                    .string()
                    .min(2, "Last name can not be less than 2 chars!")
                    .required("Last name can not be empty!"),
        email: Yup
                    .string()
                    .email("Invalid email format")
                    .required("Last name can not be empty!"),
        password: Yup
                    .string()
                    .min(6, "Password can not be less than 6 chars!")
                    .max(15, "Password can not be more than 15 chars!")
                    .required("Password can not be empty!")
    })

    const onSubmit = async (values) => {
        console.log(values);
        console.log("Form Submitted!");
        try {
            const resp = await axios.post("https://644d2ac957f12a1d3dd95135.mockapi.io/users", values);
            console.log(resp.data);
        } catch (err) {
            console.log(err);
            alert("There is an unexpected issue!")
        }
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

  return (
    <Container>
        <h2>Formik & Yup - 2</h2>
        <p style={{fontSize:"12px"}}>*Fields must be filled!</p>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='Please enter your First name'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.firstName && !formik.errors.firstName}
                    isInvalid={formik.touched.firstName && formik.errors.firstName}
                />
                <Form.Control.Feedback type='invalid'>{formik.errors.firstName}*</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='text'
                    name='lastName'
                    id='lastName'
                    placeholder='Please enter your Last name'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.lastName && !formik.errors.lastName}
                    isInvalid={formik.touched.lastName && formik.errors.lastName}
                />
                <Form.Control.Feedback type='invalid'>{formik.errors.lastName}*</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Please enter your email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.email && !formik.errors.email}
                    isInvalid={formik.touched.email && formik.errors.email}
                />
                <Form.Control.Feedback type='invalid'>{formik.errors.email}*</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Please enter your password'
                    {...formik.getFieldProps("password")}
                    isValid={formik.touched.password && !formik.errors.password}
                    isInvalid={formik.touched.password && formik.errors.password}
                />
                <Form.Control.Feedback type='invalid'>{formik.errors.password}*</Form.Control.Feedback>
            </Form.Group>
            <Button type='submit' className='mt-3'>Send Form</Button>
        </Form>
    </Container>
  )
}

export default FormikYup2