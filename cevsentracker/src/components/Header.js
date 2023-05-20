import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import cevsen from "../assets/image/cevsen.jpg";
import yazi from "../assets/image/yazi.jpg";


const Header = () => {
    return (
        <Navbar bg="danger" variant="dark"  fixed="top">
        <Container fluid>
          <Navbar.Brand href="/" style={{ fontSize: '2rem', display: 'flex', alignItems: 'center' }}>
            <img src={cevsen} height={100} className="mr-2" alt='cevsen' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link href="/" style={{ fontSize: '1.5rem' }}>
                <img src={yazi} height={100} className="me-2" alt='cevsen' />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   )
};

export default Header;