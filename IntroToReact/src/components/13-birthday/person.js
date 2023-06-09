import React from 'react'
import {Delete} from "@mui/icons-material"
import { Card, Row, Col } from 'react-bootstrap'

const Person = ({id, age, image, name, deletePerson}) => {

  
  return (
    <Card>
      <Row>
        <Col md={4}>
          <img src={require(`../../assets/img/${image}`)} alt={name} title={name}/>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Age: {age}
            </Card.Text>
            <Delete style={{cursor:'pointer'}} onClick={()=>deletePerson(id)}/>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default Person;