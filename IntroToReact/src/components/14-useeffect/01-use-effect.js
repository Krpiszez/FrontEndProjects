import React, {useEffect, useState} from 'react'
import { Alert, Container, ButtonGroup, Button } from 'react-bootstrap'

const UseEffect01 = () => {

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [errormessage, setErrorMessage] = useState("");
    const [number, setNumber] = useState();

    const handleError = (val) => {
        setMessage("")
        setErrorMessage(val);
        setError(true);
    }

    const handleMessage = (val) => {
        setErrorMessage("")
        setMessage(val);
        setError(true)
    }

    console.log(`This line is executed during renders and re-renders and before the below section is rendered!`);

    useEffect(()=>{
        console.log(`The codes in this section only work with first render. However, it doesn't work with re-renders`)
    }, []);

  return (
    <Container>
        <h2>Use Effect-1</h2>
        <Alert variant='danger' show={error}>{message}{number}{errormessage}</Alert>
        <ButtonGroup>
            <Button variant='secondary' onClick={()=>handleMessage("Hello")}>Set Message</Button>
            <Button variant='danger'onClick={()=>handleError("Error occured")}>Throw Error</Button>
            <Button variant='danger'onClick={()=>setNumber(Math.random(100))}>Number</Button>
        </ButtonGroup>
    </Container>
  )
}

export default UseEffect01