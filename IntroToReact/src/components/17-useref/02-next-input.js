import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const NextInput = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const buttonRef = useRef(null);

    const handleKeyDown = (e, refToFocus) => {
        console.log(e.key)
        if(e.key === "Enter"){
            refToFocus.current.focus();
        }
    }

    const handleSubmit = () => {
        alert(`Username: ${usernameRef.current.value} Password: ${passwordRef.current.value}`)
    }

  return (
    <Container>
        <Form>
            <Form.Control 
            type='email' 
            ref={usernameRef} 
            onKeyDown={(e)=>handleKeyDown(e, passwordRef)} 
            placeholder='Enter Your Email' 
            className='mb-2'
            />
            <Form.Control 
            type='password' 
            ref={passwordRef} 
            onKeyDown={(e)=>handleKeyDown(e, buttonRef)} 
            placeholder='Enter Your Password' 
            className='mb-2'
            />
            <Button ref={buttonRef} type='button' onClick={handleSubmit}>Submit Form</Button>
        </Form>
    </Container>
  )
}

export default NextInput