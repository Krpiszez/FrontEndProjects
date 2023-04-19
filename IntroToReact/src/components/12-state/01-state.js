import { ButtonGroup } from '@mui/material';
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';

const State1 = () => {

    const [counter, setCounter] = useState(0);

    const handleCounter = (val) => {
        setCounter(val);
    }

  return (
    <Container>
        <ButtonGroup>
          <Button variant='danger' onClick={()=>handleCounter(counter-1)}>-</Button>
          <Button variant='primary' disabled>{counter}</Button>
          <Button variant='success' onClick={()=>handleCounter(counter+1)}>+</Button>
          <Button variant='warning' onClick={()=>handleCounter(0)}>Reset</Button>
        </ButtonGroup>
    </Container>
  )
}

export default State1