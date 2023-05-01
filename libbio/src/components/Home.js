import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import lib1 from '../assets/image/lib1.jpg'
import lib2 from '../assets/image/lib2.jpg'
import lib3 from '../assets/image/lib3.jpg'
import '../assets/scss/Home.scss';

const Home = () => {
  return (
  <Container fluid="md" style={{marginTop:'10rem'}}>
  <h1 className="text-center custom-heading">LIBRARIES</h1>
  <Carousel >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={lib1}
        alt="First slide"
        width={400} // decrease the width
        height={600} // decrease the height
      />
      <Carousel.Caption>
        <h3>Library1</h3>
        <p>Short definition Lib1</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={lib2}
        alt="Second slide"
        width={600} // decrease the width
        height={600} // decrease the height
      />

      <Carousel.Caption>
        <h3>Library2</h3>
        <p>Short definition Lib2</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={lib3}
        alt="Third slide"
        width={600} // decrease the width
        height={600} // decrease the height
      />

      <Carousel.Caption>
        <h3>Library3</h3>
        <p>
          Short definition Lib3
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</Container>

  )
}

export default Home