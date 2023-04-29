import React from 'react'
import UserCard from './user-card'
import { Container, Row, Col } from 'react-bootstrap'

const UserCards = () => {
  return (
    <Container>
        <Row>
            <Col>
                <UserCard/>
            </Col>
        </Row>
    </Container>
  )
}

export default UserCards