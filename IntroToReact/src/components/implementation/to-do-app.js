import React, { useRef, useState, useEffect } from 'react'
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap';
import ToDoCards from './to-do-app-card';
import axios from 'axios';

const ToDo = () => {
    const toDoRef = useRef(null);
    const [toDoList, setToDoList] = useState([]);
    const loadData = () => fetch('https://644d2ac957f12a1d3dd95135.mockapi.io/toDo')
    .then((response)=>response.json())
    .then((data)=>{
        setToDoList(data);
    })

    useEffect(()=>{
        loadData();
    }, [])

    const addDataToMockApi = async (data) => {
        try {
          const response = await axios.post('https://644d2ac957f12a1d3dd95135.mockapi.io/toDo', data);
          loadData();
          console.log(response.data); // the response data from the mock API
        } catch (err) {
          console.log(err);
        }
      }

    const handleDelete = (id) => {
        setToDoList(prevList => prevList.filter(item => item.id !== id));
    }

  return (
    <Container>
        <InputGroup style={{width:'400px'}}>
            <Form.Control
            placeholder="To Do Element"
            aria-label="Recipient's username with two button addons"
            ref={toDoRef}
            />
            <Button 
            variant="outline-secondary"
            onClick={(e)=>{
                const newData = {
                    "name" : toDoRef.current.value
                };

                addDataToMockApi(newData);

            }}
            >Button</Button>
        </InputGroup>
        <Row className='mx-0'>            
                {toDoList.map((t)=>{
                    return(
                        <ToDoCards key={t.id}{...t} handleDelete={handleDelete}/>
                    )
                })
                }
        </Row>
    </Container>
  )
}

export default ToDo