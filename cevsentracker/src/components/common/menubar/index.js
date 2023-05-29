import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Home, CheckBox, Info, Pool } from '@mui/icons-material';
import { UserMenu } from '../../';
import { config } from '../../../config';
import { useSelector } from 'react-redux';

const Menubar = () => {
    const { pathname } = useLocation();
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const { routes: { home, about, user: {userRoute, userHabitTrack, userHabits} } } = config;

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleNavToggle = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    const handleNavLinkClick = () => {
        setIsNavExpanded(false);
    };

    return (
        <div className='menubar'>
            <Navbar expand="lg">
                <Container className='p-0'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavToggle} />
                    <Navbar.Collapse id='basic-navbar-nav' in={isNavExpanded}>
                        <Nav className="me-auto" onClick={handleNavLinkClick}>
                            <Nav.Link as={Link} to={home} active={pathname === home}>
                                <Home /> Home
                            </Nav.Link>
                            {isLoggedIn && (
                                <>
                                    <Nav.Link as={Link} to={`${userRoute}/${userHabits}`} active={pathname === userHabits}>
                                        <Pool /> Habits
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={`${userRoute}/${userHabitTrack}`} active={pathname === userHabitTrack}>
                                        <CheckBox /> Track Habits
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={userRoute} active={pathname === userRoute}>
                                        <Home /> Hello {user?.userName} 
                                    </Nav.Link>
                                </>
                            )}
                            <Nav.Link as={Link} to={about} active={pathname === about}>
                                <Info /> About
                            </Nav.Link>
                        </Nav>
                        <UserMenu />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;
