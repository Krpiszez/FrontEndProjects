import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import products from "../assets/data/products.json";
import Product from './Product';

const ProductList = () => {
  return (
    <Container className='mt-5'>
      <Row className='g-5 mt-5'>
        {
          products.map(product => {
            console.log(product);
            return (
              <Col key={product.id} md={6} lg={5} xl={4} xxl={3} className='d-flex justify-content-center'>
                <Product {...product} />
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
};

export default ProductList;