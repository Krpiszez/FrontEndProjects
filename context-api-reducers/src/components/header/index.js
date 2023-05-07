import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { settings } from '../../constants';
import { useStore } from '../../store';
import { logout } from '../../store/auth/actions';

const Header = () => {
    const { routes: { home, login } } = settings;
    const { dispatchAuth, authState: { isLoggedIn } } = useStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        let confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            dispatchAuth(logout());
            navigate(login)
        }
    };

    return (
        <Navbar bg="dark" variant="dark" className='p-3'>
            <Link to={home}>
                <Navbar.Brand>
                    TECHPRO EDUCATION
                </Navbar.Brand>
            </Link>
            <Nav className="ms-auto">
                {
                    isLoggedIn
                        ? <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        : <Nav.Link as={Link} to={login}>Login</Nav.Link>
                }
            </Nav>
        </Navbar>
    )
};

export default Header;