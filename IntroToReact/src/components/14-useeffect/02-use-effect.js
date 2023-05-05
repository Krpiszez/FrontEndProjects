import React, {useEffect, useState} from 'react'
import { Button, Container } from 'react-bootstrap'

export const Counter2 = () => {

    const [counter, setCounter] = useState(0);
    const [check, setCheck] = useState(0);

    const handleCounter = () => {
        setCounter(prev => prev +1);
        setCheck(1);
    }

    const handleZero = () => {
        setCheck(0);
        setCounter(0);
    }

    useEffect(()=>{
        if(check===0) return;
        document.title = `${counter} times clicked!`;
        return()=>{
            document.title = `React Application | Krpiszez`;
        }

    },[counter])
  return (
    <Container>
        <h4>{counter} times clicked on the button below</h4>
        <Button variant='warning' onClick={handleCounter}>Click me!</Button>
        <Button variant='warning' onClick={handleZero}>Click to 0!</Button>
    </Container>
  )
}
