import { useFormik } from 'formik'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { settings } from '../../constants';
import { loginSuccess } from '../../store/auth/actions';

const Login = () => {
    const { dispatchAuth } = useStore();
    const navigate = useNavigate();
    const { api: { baseUrl }, endpoints: { users }, routes: { home } } = settings;

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    });

    const onSubmit = async (values) => {
        try {
            const resp = await axios.get(`${baseUrl}${users}`)
            const user = resp.data.find(user=>user.email === values.email && user.password === values.password)
            if(!user){
              throw new Error('Invalid Credentials!')
            } dispatchAuth(loginSuccess(user))
            navigate(home)
        } catch (error) {
            console.log(error)

        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })


    return (
        <Container className='h-100 d-flex flex-column justify-content-center align-items-center'>
            <h1>Login</h1>
            <Form onSubmit={formik.handleSubmit} className='d-flex flex-column gap-3'>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default Login