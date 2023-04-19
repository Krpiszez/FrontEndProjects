import { Container} from '@mui/material'
import {Button} from 'react-bootstrap'
import React, { useState } from 'react'
import peopleData from "../../assets/data/people.json"
import Person from './person'

const Birthday = () => {

  const [people, setPeople] = useState(peopleData);

  return (
    <Container>
      <h2>People Born Today:</h2>
      <p>There are {people.length} people born today!</p>
        {
          people.map((person, index) => {
            return(
              <Person key={index} {...person}/>
            )
          })
        }
        <Button variant='danger' onClick={()=>{setPeople([])}}>Clear All</Button>
    </Container>
  )
}

export default Birthday