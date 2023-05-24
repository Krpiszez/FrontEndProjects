import React, { useEffect, useState } from 'react'
import AppRouter from './router'
import { useDispatch } from 'react-redux';
import { config } from './config';
import { encryptedLocalStorage, getUser } from './api';
import { loginFailure, loginSuccess } from './store';
import { LoadingPage } from './pages';

const App = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { projectDetails: { name } } = config;

    const loadData = async () => {
        try {
            const token = encryptedLocalStorage.getItem('token');
            if (token) {
                const data = await getUser();
                dispatch(loginSuccess(data))
            }
        } catch (error) {
            dispatch(loginFailure())
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        document.title = `${name} | Your Trusted Habit Tracker Service`;
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                loading
                    ? <LoadingPage />
                    : <AppRouter />
            }
        </>
    )
}

export default App