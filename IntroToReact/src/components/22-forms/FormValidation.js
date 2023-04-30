import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const FormValidation = () => {
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        phone : ""
    });
    const handleFormData = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (!formData.firstName) {
                alert("Please enter your first name!");
                return;
            }
            if (!formData.lastName) {
                alert("Please enter your last name!");
                return;
            }
            if (!formData.email) {
                alert("Please enter your email!");
                return;
            }
            if (!formData.phone) {
                alert("Please enter your phone number!");
                return;
            }
            console.log("Form submitted!")
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <Container>
        <h2>Form Validation</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='text'
                    name='firstName'
                    placeholder='Please Enter your first name'
                    value={formData.firstName}
                    onChange={handleFormData}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='text'
                    name='lastName'
                    placeholder='Please Enter your last name'
                    value={formData.lastName}
                    onChange={handleFormData}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='email'
                    name='email'
                    placeholder='Please Enter your email'
                    value={formData.email}
                    onChange={handleFormData}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='tel'
                    name='phone'
                    placeholder='Please Enter your phone number'
                    value={formData.phone}
                    onChange={handleFormData}
                    required
                />
            </Form.Group>
            <Button type='submit' className='mt-3'>Send Form</Button>
        </Form>
    </Container>
  )
}

export default FormValidation