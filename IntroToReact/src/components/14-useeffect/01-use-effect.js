import React, {useEffect, useState} from 'react'
import { Alert, Container, ButtonGroup, Button } from 'react-bootstrap'

const UseEffect01 = (id) => {

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

    console.log(`This line is executed during renders and re-renders and before the below return section is rendered`);

    useEffect(() => {
        console.log(`MOUNTING: The codes in this section only work with first render. However, it doesn't work with re-renders`);

        return () => {
             console.log(`UNMOUNTING: The codes in this section only work at the end of render. Mostly to be workt with setInterval()
             when you kill the rendering of that component that it will work!`);
        }
    }, []);

    useEffect(() => {
        console.log(`UPDATING-1: The codes in this section are executed in render and re-render situations and after the return part at the bottom is rendered. This useEffect is specifically used to access underlying elements with useRef`);
    });

    useEffect(() => {
        console.log(`UPDATING-2: The codes in this section work at the first render and after teh first render if teh dependency (message, id) written at the bottom changes`);
    }, [message, id]);

  return (
    <Container>
        <h2>Use Effect-1</h2>
        <Alert variant='danger' show={error}>{message}{number}{errormessage}</Alert>
        <ButtonGroup>
            <Button variant='secondary' onClick={()=>handleMessage("Hello")}>Set Message</Button>
            <Button variant='danger'onClick={()=>handleError("Error occured")}>Throw Error</Button>
            <Button variant='primary'onClick={()=>setNumber(Math.random(100))}>Number</Button>
        </ButtonGroup>
    </Container>
  )
}

export default UseEffect01