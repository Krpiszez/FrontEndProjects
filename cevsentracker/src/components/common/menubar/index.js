import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Home, CheckBox, Info } from '@mui/icons-material';
import { UserMenu } from '../../';
import { config } from '../../../config';

const Menubar = () => {
    const { pathname } = useLocation();

    const { routes: { home, about, user: {userRoute, habitTrack} } } = config;

    return (
        <div className='menubar'>
            <Navbar expand="lg">
                <Container className='p-0'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={home} active={pathname === home}>
                                <Home /> Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={`${userRoute}/${habitTrack}`} active={pathname === habitTrack}>
                                <CheckBox /> Track Habits
                            </Nav.Link>
                            <Nav.Link as={Link} to={about} active={pathname === about}>
                                <Info /> About
                            </Nav.Link>
                            {/* <Nav.Link as={Link} to={contact} active={pathname === contact}>
                                <Headphones /> Contact
                            </Nav.Link> */}
                        </Nav>
                        <UserMenu />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menubar