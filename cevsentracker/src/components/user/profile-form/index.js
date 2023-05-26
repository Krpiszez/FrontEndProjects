import React, { useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { FormTypes } from '../../';
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { swalToast, userProfileFormValidationSchema, validCheck } from '../../../utils'
import ReactInputMask from 'react-input-mask-next'
import { updateUser } from '../../../api'

const UserProfileForm = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(state => state.auth);
    const { firstName, lastName, email, phoneNumber, address, zipCode } = user;

    const initialValues = {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        zipCode
    };

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            await updateUser(values);
            swalToast('Profile updated successfully!', 'success')
        } catch (error) {
            swalToast(error.response.data.message, 'error');
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema: userProfileFormValidationSchema,
        onSubmit
    });

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <fieldset>
                <FormTypes
                    formik={formik}
                    name="firstName"
                    label="First Name"
                />
                <FormTypes
                    formik={formik}
                    name="lastName"
                    label="Last Name"
                />
                <FormTypes
                    formik={formik}
                    name="email"
                    label="Email"
                    type="email"
                />
                <Form.Group className='mb-3'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        {...formik.getFieldProps('phoneNumber')}
                        {...validCheck('phoneNumber', formik)}
                        as={ReactInputMask}
                        mask="(999) 999-9999"
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.phoneNumber}
                    </Form.Control.Feedback>
                </Form.Group>
                <FormTypes
                    formik={formik}
                    name="address"
                    label="Address"
                />
                <FormTypes
                    formik={formik}
                    name="zipCode"
                    label="Zip Code"
                />

                <Button
                    type='submit'
                    disabled={!(formik.isValid && formik.dirty) || loading}
                    className='text-uppercase w-100 mt-3'
                >
                    {loading && <Spinner animation='border' size='sm' />}  Update information
                </Button>

            </fieldset>
        </Form>
    )
}

export default UserProfileForm