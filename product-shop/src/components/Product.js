import React from 'react'
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {
    const { desc, image, price, title } = props;

    const productImage = require(`../assets/images/${image}`);

    const addToCart = () => {
        alert(`${title} is added to cart`);
    };

    return (
        <Card className='h-100' style={{ width: '300px' }}>
            <Card.Img variant="top" src={productImage} />
            <Card.Body className='text-center d-flex flex-column justify-content-between align-items-center'>
                <Card.Title className='fs-2'>{title}</Card.Title>
                <Card.Subtitle>
                    {desc}
                </Card.Subtitle>
                <Card.Text className='fs-3 text-info'>
                    ${price}
                </Card.Text>
                <Button variant="warning" onClick={addToCart}>Add To Cart</Button>
            </Card.Body>
        </Card>
    )
};

export default Product;