import React from 'react'
import { Col } from 'react-bootstrap';
import "./style.scss";

const WhoWeAreServices = ({ icon, services: { title, desc } }) => {
    return (
        <Col md={4} className='who-we-are-services p-4'>
            {icon} <h4>{title}</h4>
            <p>{desc}</p>
        </Col>
    )
};

export default WhoWeAreServices;