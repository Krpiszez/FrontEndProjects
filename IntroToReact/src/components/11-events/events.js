import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Event = () => {
    const sayHello1 = () => {
        alert("Hello!")
    }

    const sayHello2 = (name) => { alert(`Hello ${name}`) }
  return (
    <Container>
        <h2>Event</h2>
        <Button variant='danger' onClick={sayHello1}>Say Hello</Button>
        <Button variant='warning' className='ms-2' onClick={() => sayHello2("Selim!")}>Say Hello</Button>
    </Container>
  )
}

export default Event