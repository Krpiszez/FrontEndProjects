import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
    <Navbar bg="primary" variant="dark" expand="xl" style={{ fontFamily: 'Roboto', fontSize: '1.5rem' }} fixed="top">
            <Container fluid>
            <Navbar.Brand href="/" style={{fontSize:'2rem'}}>
                <img src="../open-book-64.png" alt="book" className="mr-2"/>LibBio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#libraries" className="mx-3">Libraries</Nav.Link>
                <Nav.Link href="#about-us" className="mx-3">About Us</Nav.Link>
                <Nav.Link href="#contact-us" className="mx-3">Contact Us</Nav.Link>                
            </Nav>
            <Nav className='mx-0 lg-0'>
                <Nav.Link href="#login" className="mx-3">Login</Nav.Link>
                <Nav.Link href="#register" className="mx-3">Register</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
    </Navbar>








    )
};

export default Header;