import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const FormPractice1 = () => {
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        phone : ""
    });

    console.log(formData)

  return (
    <Container>
        <h2>Forms - Practice 1</h2>
        <p>{formData.firstName}</p>
        <p>{formData.lastName}</p>
        <p>{formData.email}</p>
        <p>{formData.phone}</p>
        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                type='text' 
                placeholder='Enter your first name'
                value={formData.firstName}
                onChange={(e)=> setFormData({...formData, firstName:e.target.value})}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                type='text' 
                placeholder='Enter your last name'
                value={formData.lastName}
                onChange={(e)=> setFormData({...formData, lastName:e.target.value})}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type='email' 
                placeholder='Enter your email'
                value={formData.email}
                onChange={(e)=> setFormData({...formData, email:e.target.value})}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                type='tel' 
                placeholder='Enter your phone number'
                value={formData.phone}
                onChange={(e)=> setFormData({...formData, phone:e.target.value})}
                />
            </Form.Group>
        </Form>
    </Container>
  )
}

export default FormPractice1