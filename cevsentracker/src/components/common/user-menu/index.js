import React from 'react'
import { Button, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { config } from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { swalQuestion } from '../../../utils';
import { logout } from '../../../store';
import { encryptedLocalStorage } from '../../../api';
import "./style.scss";

const UserMenu = () => {
    const { routes: { home, user: { userRoute, userHabits, userHabitTrack }, admin: { admin }, login, register } } = config;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.auth);

    const handleLogout = () => {
        swalQuestion("Logout", "Are you sure you want to logout?").then(response => {
            if (response.isConfirmed) {
                dispatch(logout());
                encryptedLocalStorage.removeItem("token");
                navigate(home);
            }
        })
    }

    return (
        <div className='user-menu'>
            {
                isLoggedIn
                    ? <Dropdown align="end">
                        <Dropdown.Toggle>
                            {user?.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                user?.roles?.includes("Administrator") && (
                                    <>
                                        <Dropdown.Item as={Link} to={`/${admin}`}>
                                            Admin Panel
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                    </>
                                )
                            }

                            <Dropdown.Item as={Link} to={`/${userRoute}`}>
                                Profile
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={`/${userRoute}/${userHabits}`}>
                                Habits
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={`/${userRoute}/${userHabitTrack}`}>
                                Track Habits
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleLogout}>
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    : <>
                        <Button className='text-info' onClick={() => navigate(login)}>
                            Login
                        </Button>
                        <Button className='text-info' onClick={() => navigate(register)}>
                            Register
                        </Button>                    
                    </>
            }
        </div>
    )
}

export default UserMenu