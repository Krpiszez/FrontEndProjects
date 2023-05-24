import React, { useState } from 'react';
import { registerFormInitialValues, registerFormValidationSchema, swalToast } from '../../../utils';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import "./style.scss";
import { config } from "../../../config";
import { register } from '../../../api';
import { Form, Button } from "react-bootstrap";

const RegisterPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { routes: { login } } = config;

    const onSubmit = async (values) => {
        setLoading(true);
        try {
            await register(values);
            swalToast("You have successfully registered!", "success");
            formik.resetForm();
        } catch (error) {
            console.log(error)
            swalToast(error.response.data.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: registerFormInitialValues,
        validationSchema: registerFormValidationSchema,
        onSubmit
    });

    const validCheck = (field) => ({
        isInvalid: formik.touched[field] && formik.errors[field],
        isValid: formik.touched[field] && !formik.errors[field],
    });

    return (
        <Form
            noValidate
            onSubmit={formik.handleSubmit}
            className="register-form"
        >
            <Form.Group className='mb-3'>
                <Form.Label>User Name</Form.Label>
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
                    placeholder="Enter password"
                    {...formik.getFieldProps("password")}
                    {...validCheck("password")}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    {...formik.getFieldProps("confirmPassword")}
                    {...validCheck("confirmPassword")}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.confirmPassword}
                </Form.Control.Feedback>
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                disabled={!(formik.dirty && formik.isValid) || loading}
                className='mb-3'
            >
                register
            </Button>
            <p>Already a member?</p>
            <Button
                variant="primary"
                onClick={() => navigate(`/${login}`)}
                disabled={loading}
            >
                login
            </Button>
        </Form>
    )
}

export default RegisterPage;