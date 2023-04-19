import React from 'react'
import { Card } from 'react-bootstrap';

const House = (props) => {
    const {desc, image, price, title} = props;

    const houseImage = require(`../assets/images/${image}`)

    return (
        <Card className='h-100' style={{ width: '300px' }}>
            <Card.Img variant="top" src={houseImage} />
            <Card.Body className='text-center d-flex flex-column justify-content-between align-items-center'>
                <Card.Title className='fs-2'>{title}</Card.Title>
                <Card.Subtitle>
                    {desc}
                </Card.Subtitle>
                <Card.Text className='fs-3 text-info'>
                    {price}TL
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default House;
