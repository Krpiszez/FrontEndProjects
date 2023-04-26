import React, { useEffect, useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const UseRefHook = () => {
    const emailRef = useRef(null);
    const buttonRef = useRef(null);

    const handleFocus = () => { 
      console.log(emailRef.current.value)
      emailRef.current.focus();
      emailRef.current.style.backgroundColor = "red"
      emailRef.current.style.color = "white"
      console.log(buttonRef)
    }
  return (
    <Container>
        <Form>
          <Form.Control
          type='email'
          placeholder='Enter email'
          ref={emailRef}
          className='mb-2'/>
          <Button ref={buttonRef} onClick={handleFocus}>Set Focus</Button>
        </Form>
    </Container>
  )
}

export default UseRefHook