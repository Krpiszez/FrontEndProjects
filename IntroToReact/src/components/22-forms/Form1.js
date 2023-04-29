import React, { useState } from 'react'
import { Container, Form, Table } from 'react-bootstrap'

const Form1 = () => {
    const [name, setName] = useState("");
    const handleChange = (e) =>{
        setName(e.target.value);
    }
  return (
    <Container>
        <Form>
            <h1>Hello {name}</h1>
            <input 
                type="text"
                placeholder='Enter Your name' 
                onChange={(e)=>handleChange(e)}
                value={name}
            />
        </Form>
    </Container>
  )
}

export default Form1