import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="xl" style={{ fontFamily: 'Roboto', fontSize: '2rem' }}>
            <Container fluid>
                <Navbar.Brand href="http://localhost:3000/" style={{fontSize:'2rem'}}>LibBio <img src="../open-book-64.png" alt="book"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-4 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#libraries" className="mx-xl-4">Libraries</Nav.Link>
                        <Nav.Link href="#about-us" className="mx-xl-4">About Us</Nav.Link>
                        <Nav.Link href="#contact-us" className="mx-xl-4">Contact Us</Nav.Link>
                        <Nav.Link href="#login" className="mx-xl-4">Login</Nav.Link>
                        <Nav.Link href="#register" className="mx-xl-4">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;