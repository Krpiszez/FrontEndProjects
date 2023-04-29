import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import ChildComponent from './child-component'

const ParentComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = (val) => {
        setCounter(counter + val);
    }
  return (   
    <Container>
        <ChildComponent handleClick={handleClick}/>
        <h2>You clicked {counter} times!</h2>
    </Container>
  )
}

export default ParentComponent