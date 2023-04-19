import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import houses from "../assets/data/houses.json"
import House from './House'

const HouseList = () => {
    return (
        <Container className='mt-5'>
            <Row className='g-5 mt-5'>
                {
                    houses.map(house => {
                        return (
                            <Col key={house.id} md={6} lg={5} xl={4} xxl={3} className='d-flex justify-content-center'>
                                <House {...house} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
};

export default HouseList;
