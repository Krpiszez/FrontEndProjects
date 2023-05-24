import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { config } from '../../../config';
import { useFormik } from 'formik';
import { loginFormInitialValues, loginFormValidationSchema, swalToast } from '../../../utils';
import { Button, ButtonGroup, Form, Spinner } from "react-bootstrap";
import { encryptedLocalStorage, getUser, login } from '../../../api';
import { loginFailure, loginSuccess } from '../../../store';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { routes: { register, home } } = config;


    const onSubmit = async (values) => {
        setLoading(true);
        try {
            const data = await login(values);
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

    const validCheck = (field) => ({
        isInvalid: formik.touched[field] && formik.errors[field],
        isValid: formik.touched[field] && !formik.errors[field],
    });

    return (
        <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>User name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter user name"
                    {...formik.getFieldProps("userName")}
                    {...validCheck("userName")}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.userName}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                    {...validCheck("password")}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                </Form.Control.Feedback>
            </Form.Group>

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