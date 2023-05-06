import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { settings } from "../../constants";
import { useStore } from "../../store";
import { logout } from "../../store/auth/actions";

const Header = () => {

  const{ routes: { home, login } } = settings;
  const { dispatchAuth, authState: { isLoggedIn } } = useStore();

  const handleLogout = () => {
    dispatchAuth(logout());
  }

  return (
    <Navbar bg="dark" variant="dark" className='p-3'>
      <Link to={home}>
          <Navbar.Brand href="#home">
            Tech Pro
          </Navbar.Brand>
      </Link>
          <Nav className="ms-auto">
            {
              isLoggedIn ? <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                         : <Nav.Link as={Link} to={login}>Login</Nav.Link>
            }
          </Nav>
      </Navbar>
  )
}

export default Header