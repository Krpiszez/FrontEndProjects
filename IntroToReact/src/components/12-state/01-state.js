import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';

const State1 = () => {

    const [counter, setCounter] = useState();

    const handleCounter = () => {
        console.log("Handle Counter Runs")
        setCounter(10);
    }

  return (
    <Container>
        <Button onClick={handleCounter}>{counter}</Button>
    </Container>
  )
}

export default State1