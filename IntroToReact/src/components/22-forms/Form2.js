import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const Form2 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const handleChange = (e) =>{
        console.log(e.target.value)
        setNum1(e.target.value)
    }
  return (
    <Container>
        <Form>
            <Form.Group>
                <Form.Label>
                    Enter the 1. num
                </Form.Label>
                <Form.Control 
                    type='number'
                    placeholder='1. Number'
                    value={num1}
                    onChange={(e)=>setNum1(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Enter the 2. num
                </Form.Label>
                <Form.Control 
                    type='number'
                    placeholder='2. Number'
                    value={num2}
                    onChange={(e)=>setNum2(e.target.value)}
                />
            </Form.Group><Form.Group>
                <Form.Label>
                    Enter the 3. num
                </Form.Label>
                <Form.Control 
                    type='number'
                    placeholder='3. Number'
                    value={num3}
                    onChange={(e)=>setNum3(e.target.value)}
                />
            </Form.Group>
        </Form>
    </Container>
    )
}

export default Form2