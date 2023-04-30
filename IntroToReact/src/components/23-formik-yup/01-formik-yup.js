import { useFormik } from 'formik';
import React from 'react';
import { Container } from 'react-bootstrap';
import * as Yup from 'yup';

const FormikYup1 = () => {

    const initialValues = {
        firstName: "",
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().min(5, "Name cannot be less than 5 characters!").required("You cannot leave first name field empty!")
    })

    const onSubmit = async (values) => {
        console.log(values)
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    });

    return (
        <Container>
            <h2>Formik & Yup — 1</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName" className='me-3'>First Name</label>
                <input
                    type="text"
                    name='firstName'
                    id='firstName'
                    placeholder='Please enter your first name'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.firstName && formik.errors.firstName ? (
                        <div style={{ color: 'red' }}>{formik.errors.firstName}*</div>
                    ) : null
                }
                <button type='submit'>SEND FORM</button>
            </form>
        </Container>
    )
};

export default FormikYup1;