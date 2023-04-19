import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import shoes from '../assets/data/shoes.json';

const ShoeCarousel = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
         <Carousel className='mt-5 h-100 mg-5' style={{ maxHeight: '500px', maxWidth: '500px' }}>
      {shoes.map(shoe => (
        <Carousel.Item key={shoe.id}>
          <img
            className="d-block w-100"
            src={require(`../assets/images/${shoe.image}`)}
            alt={shoe.title}
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption style={{ color: 'black' }}>
            <h3>{shoe.title}</h3>
            <p>{shoe.desc}</p>
            <p>${shoe.price}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
         </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoeCarousel;