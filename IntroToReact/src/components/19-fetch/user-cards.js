import React, { useEffect, useState } from 'react'
import UserCard from './user-card'
import { Container, Row, Col } from 'react-bootstrap'

const UserCards = () => {
    const [users, setUsers] = useState([]);
    const loadData = () =>{
        let newVar = fetch('https://644d2ac957f12a1d3dd95135.mockapi.io/users')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setUsers(data);
        });
    }
    useEffect(()=>{
        loadData();
    }, [])
  return (
    <Container>
        <Row>
            <Col>
                {users.map((user)=>{
                    return(
                        <UserCard key={user.id}{...user}/>
                    )
                })
                }
            </Col>
        </Row>
    </Container>
  )
}

export default UserCards