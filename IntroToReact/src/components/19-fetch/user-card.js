import React from 'react'
import { Card } from 'react-bootstrap'

const UserCard = ({avatar, createdAt, firstName, id, lastName}) => {
  return (
    <Card style={{ width: '18rem', marginTop: '10px'}}>
	<Card.Img variant="top" src={avatar} />
		<Card.Body>
		<Card.Title>{firstName}</Card.Title>
    <Card.Subtitle>
                {lastName}
    </Card.Subtitle>
    </Card.Body>
    </Card>
  )
}

export default UserCard