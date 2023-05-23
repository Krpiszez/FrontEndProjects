import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { config } from '../../config';

const { routes: { login } } = config;

const UserLayout = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (!isLoggedIn) return <Navigate to={`/${login}`} />;

    return (
        <>
            <Outlet />
        </>
    )
}

export default UserLayout