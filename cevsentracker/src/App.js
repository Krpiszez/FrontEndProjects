import React, { useEffect, useState } from 'react'
import AppRouter from './router'
import { useDispatch } from 'react-redux';
import { config } from './config';
import { encryptedLocalStorage } from './api';

const App = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { projectDetails: { name } } = config;

    const loadData = async () => {
        try {
            const token = encryptedLocalStorage.getItem('token');

        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <AppRouter />
        </>
    )
}

export default App