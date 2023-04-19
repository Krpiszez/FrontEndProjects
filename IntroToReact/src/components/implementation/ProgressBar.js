import { Button, Container } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import React, {useState} from 'react'

const ProgressBarLabel = () => {

    const [val, setVal] = useState(0);

    
    
    return(
    <Container>
        <Button variant='warning' onClick={()=>{setVal(0)}}>MIN</Button>
        <Button variant='warning' onClick={()=>{if(val>=10)setVal(val-10)}}>-</Button>
        <ProgressBar variant='info' now={val} label={`${val}%`} />
        <Button variant='success' onClick={()=>{if(val<=90)setVal(val+10)}}>+</Button>
        <Button variant='success' onClick={()=>{setVal(100)}}>MAX</Button>
    </Container>
    )
    
    
    
}

export default ProgressBarLabel