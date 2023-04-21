import { Container, Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import peopleData from "../../assets/data/people.json";
import Person from './person';

const Birthday = () => {

  const [people, setPeople] = useState(peopleData);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleCloseConfirm = () => setShowConfirm(false);

  const handleDelete = () => {
    const arr = people.filter(p=> p.id !== deleteId);
    setPeople(arr);
    setShowConfirm(false);
  }

  const handleShowConfirm = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  }

  return (
    <Container>
      <h2>People Born Today:</h2>
      <p>There are {people.length} people born today!</p>
        {
          people.map((person, index) => {
            return(
              <Person key={index} {...person} deletePerson = {() => handleShowConfirm(person.id)} />
            )
          })
        }
        <Button variant='danger' onClick={()=>{setPeople([])}}>Clear All</Button>
        <Modal show={showConfirm} onHide={handleCloseConfirm}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this entry?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseConfirm}>Cancel</Button>
            <Button variant="primary" onClick={handleDelete}>Delete</Button>
          </Modal.Footer>
        </Modal>
    </Container>
  )
}

export default Birthday
