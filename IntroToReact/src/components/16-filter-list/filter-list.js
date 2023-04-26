import React, { useEffect, useState } from 'react'
import studentsData from "../../assets/data/students.json"
import { Container, Form, ListGroup } from 'react-bootstrap';

const FilterList = () => {
    const [filter, setFilter] = useState("");
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        const filteredStudents = filter === "" ? studentsData : studentsData.filter((std) => std.grade.toString() === filter);
        setStudents(filteredStudents);
    }, [filter])
    
  return (
    <Container className='filter-list-container'>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label className="text-muted">Filter By Grade</Form.Label>
                <Form.Control
                type="text"
                value={filter}
                onChange={(e)=>{setFilter(e.target.value);}}
                />
            </Form.Group>
            <ListGroup>
                {
                    students.map(std => {
                        return(
                                <ListGroup.Item className='d-flex text-center'>
                                    <p className='col-8 text-start m-0'>{std.name}</p>
                                    <p className='col-2'>{std.age}</p>
                                    <p className='col-2'>{std.grade}</p>
                                </ListGroup.Item>
                            )
                    })
                }
                
            </ListGroup>
        </Form>
    </Container>
  )
}

export default FilterList