import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const FormPractice2 = () => {
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
        alert(`First Name: ${formData.firstName} \nLast Name: ${formData.lastName} \nEmail: ${formData.email} \nPhone: ${formData.phone}`)
    };

    console.log(formData)

  return (
    <Container>
        <h2>Forms - Practice 2</h2>
        <Form>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='text'
                    name='firstName'
                    placeholder='Please enter your first name'
                    value={formData.firstName}
                    onChange={handleFormData}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='text'
                    name='lastName'
                    placeholder='Please enter your last name'
                    value={formData.lastName}
                    onChange={handleFormData}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='email'
                    name='email'
                    placeholder='Please enter your email'
                    value={formData.email}
                    onChange={handleFormData}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Control
                    type='tel'
                    name='phone'
                    placeholder='Please enter your phone number'
                    value={formData.phone}
                    onChange={handleFormData}
                />
            </Form.Group>
            <Button type='submit' className='mt-3' onClick={handleSubmit}>SEND</Button>
        </Form>
    </Container>
  )
}

export default FormPractice2