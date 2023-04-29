import React from 'react'
import { Button, Card, Form, ListGroup } from 'react-bootstrap'
import { BsTrash3Fill } from "react-icons/bs";
import axios from 'axios';

const ToDoCards = ({name,id, handleDelete}) => {
    const onDelete = async () => {
        const confirmed = window.confirm('Are you sure you want to delete this item?');
        if (confirmed) {
          try {
            const response = await axios.delete(`https://644d2ac957f12a1d3dd95135.mockapi.io/toDo/${id}`);
            handleDelete(id);
          } catch (error) {
            console.error(error);
          }
        }
      };
  return (
    <Card style={{ width: '25rem', marginTop: '10px', marginRight: '12px'}}>
            <Card.Body>            
                <ListGroup variant="flush">
                <ListGroup.Item>
                    <Card.Title>{name}</Card.Title>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="col-2 d-flex justify-content-between align-items-center">
                    <div>
                        <Form.Check type="checkbox"/>
                    </div>
                    <div className='col-2'>
                    <Button
                        variant="danger"
                        onClick={onDelete}
                        style={{ marginTop: '10px' }}
                    >
                        <BsTrash3Fill />
                    </Button>
                    </div>
                    </div>
                </ListGroup.Item>
                </ListGroup>            
            </Card.Body>
    </Card>
  )
}

export default ToDoCards