import React, { useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap';
import { useFormik } from 'formik';
import { contactFormInitialValues, contactFormValidationSchema, swalToast } from '../../../../utils';
import { sendMessage } from '../../../../api';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            await sendMessage(values);
            swalToast("Your message has been sent successfully", "success")
        } catch (error) {
            swalToast(error.response.data.message, "error");
        } finally {
            setLoading(false)
        }
    };

    const formik = useFormik({
        initialValues: contactFormInitialValues,
        validationSchema: contactFormValidationSchema,
        onSubmit
    });

    const validCheck = (field) => ({
        isInvalid: formik.touched[field] && formik.errors[field],
        isValid: formik.touched[field] && !formik.errors[field],
    });

    return (
        <Form noValidate onSubmit={formik.handleSubmit} className='contact-form'>
            <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    {...formik.getFieldProps('name')}
                    {...validCheck("name")}
                />
                <Form.Control.Feedback type='invalid'>
                    {formik.errors.name}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type='email'
                    {...formik.getFieldProps('email')}
                    {...validCheck("email")}
                />
                <Form.Control.Feedback type='invalid'>
                    {formik.errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type='text'
                    {...formik.getFieldProps('subject')}
                    {...validCheck("subject")}
                />
                <Form.Control.Feedback type='invalid'>
                    {formik.errors.subject}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={5}
                    {...formik.getFieldProps('body')}
                    {...validCheck("body")}
                />
                <Form.Control.Feedback type='invalid'>
                    {formik.errors.body}
                </Form.Control.Feedback>
            </Form.Group>

            <Button
                type='submit'
                disabled={!(formik.dirty && formik.isValid) || loading}
                className='w-100'
            >
                {loading && <Spinner animation='border' size='sm' />} Send Message
            </Button>
        </Form>
    )
}

export default ContactForm