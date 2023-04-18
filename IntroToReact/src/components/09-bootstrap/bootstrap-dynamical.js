import React from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';

const BootstrapDynamical = () => {
    const error = true;

    return (
        <Container>
            <h2>Bootstrap Dynamical</h2>
            <Row>
                <Col>Cell</Col>
                <Col>Cell</Col>
                <Col>Cell</Col>
                <Col>Cell</Col>
                <Col>Cell</Col>
            </Row>
            <Button variant='danger'>Click Me</Button>
            <Button variant='info' className='ms-2'>Click Me</Button>
            <Alert variant='danger' show={error} className='my-3'>
                Hey! Pay attention!
            </Alert>
        </Container>
    )
};

export default BootstrapDynamical;