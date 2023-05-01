import React from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'

const FormikYup2Data = ({firstName, lastName, email}) => {
  return (
    <Container>
        
        <ListGroup>
        <ListGroup.Item>{firstName}</ListGroup.Item>
        <ListGroup.Item>{lastName}</ListGroup.Item>
        <ListGroup.Item>{email}</ListGroup.Item>
        </ListGroup>
        
    </Container>
  )
}

export default FormikYup2Data