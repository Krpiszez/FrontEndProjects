import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const FunctionTypeComponent = ({ carName }) => {
    const [name, setName] = useState("Techpro Education");
    const [message, setMessage] = useState("Hello Developers");
    const [hour, setHour] = useState(new Date().getHours());
    const [minute, setMinute] = useState(new Date().getMinutes());

    const welcome = "Hello World";

    useEffect(() => {
        console.log("Works on first render FTC");

        return () => {
            console.log("Works on unmount FTC");
        }
    }, []);

    useEffect(() => {
        console.log("Hour has changed");
    }, [hour])

    useEffect(() => {
        console.log("FTC re-renders each time");
    })

    return (
        <Container>
            <h1>Function Type Component</h1>
            <h2>{welcome}</h2>
            <h3>{name} — {message}</h3>
            <p className='fs-2'>{hour}:{minute}</p>
            <Button className='me-2' onClick={() => setHour(40)}>Set Hour</Button>
            <Button>Set Minute</Button>
            <p className='fw-bold'>{carName}</p>
        </Container>
    )
};

export default FunctionTypeComponent;