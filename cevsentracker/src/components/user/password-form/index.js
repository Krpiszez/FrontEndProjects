import React, { useState } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
import { PasswordInput } from '../../'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { swalToast, userPasswordFormInitialValues, userPasswordFormValidationSchema } from '../../../utils';
import { updatePassword } from '../../../api'

const UserPasswordForm = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(state => state.auth);
    const { builtIn } = user;

    const onSubmit = async (values) => {
        const dto = {
            oldPassword : values.currentPassword,
            newPassword : values.newPassword
        }
        setLoading(true);
        try {
            await updatePassword(dto);
            swalToast("Password updated successfully!", "success")
            formik.resetForm();
        } catch (error) {
            swalToast(error.response.data.message, 'error');
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: userPasswordFormInitialValues,
        validationSchema: userPasswordFormValidationSchema,
        onSubmit
    })

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <fieldset disabled={builtIn}>
                <PasswordInput
                    formik={formik}
                    name="currentPassword"
                    label="Current Password"
                />
                <PasswordInput
                    formik={formik}
                    name="newPassword"
                    label="New Password"
                />
                <PasswordInput
                    formik={formik}
                    name="confirmPassword"
                    label="Confirm Password"
                />
                <Button
                    type='submit'
                    disabled={!(formik.isValid && formik.dirty) || loading}
                    className='mt-3 text-uppercase w-100'
                >
                    {loading && <Spinner animation='border' size='sm' />} update password
                </Button>
            </fieldset>
        </Form>
    )
}

export default UserPasswordForm