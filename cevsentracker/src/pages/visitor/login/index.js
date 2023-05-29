import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { config } from '../../../config';
import { useFormik } from 'formik';
import { loginFormInitialValues, loginFormValidationSchema, swalToast } from '../../../utils';
import { Button, ButtonGroup, Form, Spinner } from "react-bootstrap";
import { encryptedLocalStorage, getUser, login } from '../../../api';
import { loginFailure, loginSuccess } from '../../../store';
import PasswordInput from '../../../components/common/password-input';
import FormTypes from '../../../components/common/form-types';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { routes: { register, home } } = config;


    const onSubmit = async (values) => {
        setLoading(true);
        try {
            const data = await login(values);
            console.log(data)
            encryptedLocalStorage.setItem("token", data.token);
            const respUser = await getUser();
            console.log(respUser)
            dispatch(loginSuccess(respUser))
            swalToast("You have successfully logged in!", "success");
            navigate(home);
        } catch (error) {
            dispatch(loginFailure());
            swalToast(error.response.data.message, 'error')
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: loginFormInitialValues,
        validationSchema: loginFormValidationSchema,
        onSubmit
    });

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <FormTypes
                formik={formik}
                label='User name'
                name="userName"
                type='userName'
                placeholder="Enter your user name"
            />

            <PasswordInput
                formik={formik}
                label='Password'
                name='password'
                placeholder='Enter your password'
            />

            <ButtonGroup className="w-100">
  <Button
    variant="primary"
    type="submit"
    disabled={!(formik.dirty && formik.isValid) || loading}
    className="w-100"
  >
    {loading && <Spinner animation="border" size="sm" />} Login
  </Button>

  <Button variant="primary" disabled className="or-button">
    OR
  </Button>

  <Button variant="primary" onClick={() => navigate(`/${register}`)} disabled={loading} className="w-100">
    {loading && <Spinner animation="border" size="sm" />} Register
  </Button>
</ButtonGroup>
        </Form>
    )
}

export default LoginPage